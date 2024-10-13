						TexturePool(const std::string& basePath, Device* device, SwapChain* swapChain);
		static void		CreateImage(Device* device, u32 width, u32 height, u32 mipLevels, VkSampleCountFlagBits numSamples, VkFormat format, VkImageTiling tiling, VkImageUsageFlags usage, VkMemoryPropertyFlags properties, VkImage& image, VkDeviceMemory& imageMemory);
		static void		TransitionImageLayout(Device* device, VkImage image, VkFormat format, VkImageLayout oldLayout, VkImageLayout newLayout, u32 mipLevels);
		static void		CopyBufferToImage(Device* device, VkBuffer buffer, VkImage image, u32 width, u32 height);