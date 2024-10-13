	class Entity;
	class ModelPool;
	class TexturePool;

		ModelPool*				m_ModelPool;
		TexturePool*			m_TexturePool;

		Camera*					m_Camera;

		std::vector<Entity*>	m_Entities;
		std::queue<Entity*>		m_PendingEntities;
								Scene(u32 id, std::string_view name, ModelPool* modelPool, TexturePool* texturePool);
		Entity*					CreateEntity(const std::string& modelPath, const std::string& texturePath);
		Camera*					GetCamera()	{ return m_Camera; }
		std::vector<Entity*>&	GetEntities()	{ return m_Entities; }
		bool					HasPendingEntities() { return m_PendingEntities.size() > 0; }
		Entity*					NextPendingEntity()
			auto entity = m_PendingEntities.front();
			m_PendingEntities.pop();
			m_Entities.push_back(entity);
			return entity;