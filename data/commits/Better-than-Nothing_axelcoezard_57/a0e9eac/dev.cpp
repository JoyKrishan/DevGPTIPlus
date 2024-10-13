		VkSurfaceFormatKHR surfaceFormat = ChooseSwapSurfaceFormat(swapChainSupport.formats);
		VkPresentModeKHR presentationMode = ChooseSwapPresentMode(swapChainSupport.presentationModes);
		VkExtent2D extent = ChooseSwapExtent(swapChainSupport.capabilities);
		u32 imageCount = swapChainSupport.capabilities.minImageCount + 1;
		if (swapChainSupport.capabilities.maxImageCount > 0 && imageCount > swapChainSupport.capabilities.maxImageCount) {
			imageCount = swapChainSupport.capabilities.maxImageCount;
		u32 queueFamilyIndices[] = { indices.graphicsFamily.value(), indices.presentationFamily.value() };
		if (indices.graphicsFamily != indices.presentationFamily) {
		createInfo.preTransform = swapChainSupport.capabilities.currentTransform;