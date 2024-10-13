		CreateCommandBuffers();

		m_UniformBuffersSize = 0;
		m_UniformBuffersCapacity = 100;

		m_UniformBuffers.resize(MAX_FRAMES_IN_FLIGHT);
		m_UniformBuffersMemory.resize(MAX_FRAMES_IN_FLIGHT);
		m_UniformBuffersMapped.resize(MAX_FRAMES_IN_FLIGHT);
		for (size_t i = 0; i < MAX_FRAMES_IN_FLIGHT; i++) {
			m_UniformBuffers[i].resize(m_UniformBuffersCapacity);
			m_UniformBuffersMemory[i].resize(m_UniformBuffersCapacity);
			m_UniformBuffersMapped[i].resize(m_UniformBuffersCapacity);
		}
	void SwapChain::CreateNewUniformBuffer()
		if (m_UniformBuffersSize >= m_UniformBuffersCapacity) {
			m_UniformBuffersCapacity *= 2;
			for (size_t i = 0; i < MAX_FRAMES_IN_FLIGHT; i++) {
				m_UniformBuffers[i].resize(m_UniformBuffersCapacity);
				m_UniformBuffersMemory[i].resize(m_UniformBuffersCapacity);
				m_UniformBuffersMapped[i].resize(m_UniformBuffersCapacity);

		for (size_t i = 0; i < MAX_FRAMES_IN_FLIGHT; i++) {
			CreateBuffer(bufferSize,
				VK_BUFFER_USAGE_UNIFORM_BUFFER_BIT,
				VK_MEMORY_PROPERTY_HOST_VISIBLE_BIT | VK_MEMORY_PROPERTY_HOST_COHERENT_BIT,
				m_UniformBuffers[i][m_UniformBuffersSize],
				m_UniformBuffersMemory[i][m_UniformBuffersSize]);

			vkMapMemory(m_pDevice->GetVkDevice(),
				m_UniformBuffersMemory[i][m_UniformBuffersSize], 0,
				bufferSize, 0,
				&m_UniformBuffersMapped[i][m_UniformBuffersSize]);
		}

		m_UniformBuffersSize += 1;