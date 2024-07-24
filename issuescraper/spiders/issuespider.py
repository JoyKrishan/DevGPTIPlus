import scrapy


class IssuespiderSpider(scrapy.Spider):
#     name = "issuespider"
#     allowed_domains = ["github.com"]
#     start_urls = ["https://github.com/"]

#     def parse(self, response):
#         pass
# import scrapy
    name = "issuespider"
    start_urls = [
        'https://www.github.com/search/issues'
    ]

    def parse(self, response):
        # Loop through each issue on the page
        for issue in response.css('div.issue'):
            # Extract the issue title and URL
            title = issue.css('a.issue-title::text').get()
            url = issue.css('a.issue-title::attr(href)').get()
            # Follow the issue link
            yield response.follow(url, self.parse_issue)

    def parse_issue(self, response):
        # Check if the issue contains the specified URL
        if 'https://chat.openai.com/share/' in response.css('div.issue-body::text').get():
            # Yield the issue data
            yield {
                'title': response.css('h1.issue-title::text').get(),
                'url': response.url,
            }