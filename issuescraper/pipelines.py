# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter


class IssuescraperPipeline:
    def process_item(self, item, spider):
        return item


class BookscaperPipeline:
    def process_item(self, item, spider):
        adapter = ItemAdapter(item)

        field_names = adapter.field_names()
        for field_name in field_names:
            if field_name != 'description':
                adapter[field_name] = adapter.get(field_name).strip()
        
        lowercase_keys = ['product_type', 'category']
        for lowercase_key in lowercase_keys:
            adapter[lowercase_key] = adapter.get(lowercase_key).lower()

        price_keys = ['price', 'price_excl_tax', 'price_incl_tax', 'tax']
        for price_key in price_keys:
            adapter[price_key] = float(adapter.get(price_key).replace('£', ''))
        
        value = adapter.get('availability').split('(')
        if len(value) < 2:
            adapter['availability'] = 0
        else:
            adapter['availability'] = int(value[1].split(" ")[0])
        
        adapter['num_reviews'] = int(adapter.get('num_reviews'))

        return item