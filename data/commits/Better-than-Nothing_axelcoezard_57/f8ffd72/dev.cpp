	void SwapChain::BindPipeline(Pipeline* pPipeline)
	{
		auto commandBuffer = m_CommandBuffers[m_CurrentFrame];
		vkCmdBindPipeline(commandBuffer, VK_PIPELINE_BIND_POINT_GRAPHICS, pPipeline->GetVkGraphicsPipeline());
	}
