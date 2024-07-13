import scrapy


class IssuespiderSpider(scrapy.Spider):
    name = "issuespider"
    allowed_domains = ["github.com"]
    start_urls = ["https://github.com/"]

    def parse(self, response):
        pass
