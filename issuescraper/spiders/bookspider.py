import scrapy
from issuescraper.items import BookItem

class BookspiderSpider(scrapy.Spider):
    name = "bookspider"
    allowed_domains = ["books.toscrape.com"]
    start_urls = ["https://books.toscrape.com"]

    def parse(self, response):
        books = response.css('article.product_pod')

        for book in books:
            relative_url = book.css('h3 a::attr(href)').get() 

            if 'catalogue/' in relative_url:
                book_url = 'https://books.toscrape.com/' + relative_url
            else:
                book_url = 'https://books.toscrape.com/catalogue/' + relative_url    
            yield response.follow(book_url, callback=self.parse_book_page)


        next_page = response.css('li.next a::attr(href)').get()

        if next_page is not None:
            if 'catalogue/' in next_page:
                next_page_url = 'https://books.toscrape.com/'+ next_page
            else:
                next_page_url = 'https://books.toscrape.com/catalogue/'+ next_page

            print(f"Next page raw href: {next_page_url}")
            yield response.follow(next_page_url, callback=self.parse)

    def parse_book_page(self, response):
        table_rows = response.css('table tr')
      
        # url, title, product_type, price_excl_tax, price_incl_tax, tax, availability, num_reviews, stars, category, description, price
        bookitem = BookItem()

        bookitem['url'] =  response.url
        bookitem['title'] = response.css('div.product_main h1::text').get()
        bookitem['product_type'] = table_rows[1].css('td::text').get()
        bookitem['price_excl_tax'] = table_rows[2].css('td::text').get()
        bookitem['price_incl_tax'] = table_rows[3].css('td::text').get()
        bookitem['tax'] =table_rows[4].css('td::text').get()
        bookitem['availability'] = table_rows[5].css('td::text').get()
        bookitem['num_reviews'] = table_rows[6].css('td::text').get()
        bookitem['stars'] =response.css('p.star-rating').attrib['class']
        bookitem['category'] = response.xpath('//*[@id="default"]/div[1]/div/ul/li[3]/a/text()').get()
        bookitem['description'] =response.xpath('//*[@id="content_inner"]/article/p/text()').get()
        bookitem['price'] =response.css('p.price_color::text').get()
    
        yield bookitem