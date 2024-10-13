		std::optional<u32>				graphicsFamily;
		std::optional<u32>				presentationFamily;
			return graphicsFamily.has_value() && presentationFamily.has_value();
		VkSurfaceCapabilitiesKHR		capabilities;
		std::vector<VkSurfaceFormatKHR>	formats;
		std::vector<VkPresentModeKHR>	presentationModes;
		Window*							m_Window;
		VkSampleCountFlagBits			m_MsaaSamples = VK_SAMPLE_COUNT_8_BIT;
		u32								FindMemoryType(u32 typeFilter, VkMemoryPropertyFlags properties);