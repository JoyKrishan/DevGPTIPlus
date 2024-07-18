import scrapy
import json

class GithubissuespiderSpider(scrapy.Spider):
    name = "githubissuespider"
    allowed_domains = ["github.com"]
    queries = [
        'https://g.co/gemini/share/',
        'https://chat.openai.com/share'
    ]
    start_urls = [f"https://api.github.com/search/issues?q={query}" 
                  for query in queries]

    def parse(self, response):
        data = json.loads(response.body)
        items = data.get('items', [])
        first_item = items[0]
        print(first_item.keys())
