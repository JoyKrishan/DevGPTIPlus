		if (!m_pSwapChain->BeginRecordCommandBuffer()) {
			throw std::runtime_error("Failed to record command buffer!");
		}

		DrawStream* drawStream = drawStreamBuilder.GetStream();
		void* currentPipeline = nullptr;
		for (u32 i = 0; i < drawStream->size; i++) {
			DrawPacket drawPacket = drawStream->drawPackets[i];
			if (drawPacket.pipeline != currentPipeline) {
				currentPipeline = drawPacket.pipeline;
				m_pSwapChain->BindPipeline(static_cast<Pipeline*>(currentPipeline));
			m_pSwapChain->Draw(&globalUniforms, &drawPacket, i);

		m_pSwapChain->EndRecordCommandBuffer();