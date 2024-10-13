void sortBi(BigramDictionary& dict)
{
	//bubble sort
	for (int i = 0; i < dict.numberOfElements - 1; i++)
	{
		for (int j = 0; j < dict.numberOfElements - i - 1; j++)
		{
			//sort by words
			if (dict.bigrams[j].word2 > dict.bigrams[j + 1].word2)
			{
				//swaps 
				Bigram temp = dict.bigrams[j];
				dict.bigrams[j] = dict.bigrams[j + 1];
				dict.bigrams[j + 1] = temp;
			}
		}

		for (int j = 0; j < dict.numberOfElements - i - 1; j++)
		{
			//sort of frequency
			if (dict.bigrams[j].word1 > dict.bigrams[j + 1].word1)
			{
				//swaps 
				Bigram temp = dict.bigrams[j];
				dict.bigrams[j] = dict.bigrams[j + 1];
				dict.bigrams[j + 1] = temp;
			}
		}
	}
}