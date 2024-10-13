#include "BetterThanNothing.hpp"
		for (auto commandBuffer : m_CommandBuffers) {
			delete commandBuffer;
		}
		for (size_t i = 0; i < MAX_FRAMES_IN_FLIGHT; i++) {
			m_CommandBuffers[i] = new CommandBuffer(m_pDevice, m_pCommandPool);
		CommandBuffer* commandBuffer = m_CommandBuffers[m_CurrentFrame];
		commandBuffer->Begin();
		commandBuffer->BeginRenderPass(renderPassInfo);
		commandBuffer->SetViewport(viewport);
		commandBuffer->SetScissor(scissor);
		m_CommandBuffers[m_CurrentFrame]->BindPipeline(pPipeline->GetVkGraphicsPipeline());
		commandBuffer->BindVertexBuffer(pDrawPacket->vertexBuffer);
		commandBuffer->BindIndexBuffer(pDrawPacket->indexBuffer);
		commandBuffer->BindDescriptorSets(
			m_pDescriptorPool->GetVkDescriptorSets()[m_CurrentFrame][index],
			pPipeline->GetVkPipelineLayout());
		commandBuffer->DrawIndexed(pDrawPacket->indicesCount);
		CommandBuffer* commandBuffer = m_CommandBuffers[m_CurrentFrame];
		commandBuffer->EndRenderPass();
		commandBuffer->End();
		submitInfo.pCommandBuffers = &commandBuffer->GetVkCommandBuffer();