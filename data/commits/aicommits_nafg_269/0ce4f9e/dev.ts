		const currentContent = await fs.readFile(messageFilePath, 'utf8');
		const newContent = instructions + '\n' + currentContent;
		await fs.writeFile(messageFilePath, newContent);
