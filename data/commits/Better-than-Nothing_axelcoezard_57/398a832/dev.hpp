		std::queue<Model*>		m_pModelsWaiting;
		Model*					LoadModel(const std::string& modelPath, const std::string& texturePath);
		bool					HasWaitingModels() { return m_pModelsWaiting.size() > 0; }

		Model*					GetNextWaitingModel()
		{
			auto model = m_pModelsWaiting.front();
			m_pModelsWaiting.pop();
			m_pModels.push_back(model);
			return model;
		}