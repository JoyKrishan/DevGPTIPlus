	TexturePool::TexturePool(const std::string& basePath, Device* device, SwapChain* swapChain): RessourcePool(basePath)
		TransitionImageLayout(m_Device, image, VK_FORMAT_R8G8B8A8_SRGB, VK_IMAGE_LAYOUT_UNDEFINED, VK_IMAGE_LAYOUT_TRANSFER_DST_OPTIMAL, *mipLevels);
		CopyBufferToImage(m_Device, stagingBuffer, image, static_cast<u32>(texWidth), static_cast<u32>(texHeight));
		}, m_Device);
	void TexturePool::TransitionImageLayout(Device* device, VkImage image, VkFormat format, VkImageLayout oldLayout, VkImageLayout newLayout, u32 mipLevels)
		}, device);
	void TexturePool::CopyBufferToImage(Device* device, VkBuffer buffer, VkImage image, u32 width, u32 height)
		}, device);