	bool SwapChain::BeginRecordCommandBuffer()
	void SwapChain::DrawModel(Pipeline* pPipeline, Model* pModel, int modelIndex)
		vkCmdBindPipeline(commandBuffer, VK_PIPELINE_BIND_POINT_GRAPHICS, pPipeline->GetVkGraphicsPipeline());
