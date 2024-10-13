#include "Renderer/GlobalUniforms.hpp"
	void SwapChain::Draw(GlobalUniforms* globalUniforms, DrawPacket* pDrawPacket, u32 index)
		auto pPipeline = static_cast<Pipeline*>(pDrawPacket->pipeline);
		// Update the uniform buffer
		UniformBufferObject ubo = {
			.m_Model = pDrawPacket->model,
			.m_View = globalUniforms->view,
			.m_Projection = globalUniforms->projection
		};

		memcpy(m_UniformBuffersMapped[m_CurrentFrame][index], &ubo, sizeof(ubo));
		// Bind the vertex buffer
		VkBuffer vertexBuffers[] = {pDrawPacket->vertexBuffer};
		vkCmdBindIndexBuffer(commandBuffer, pDrawPacket->indexBuffer, 0, VK_INDEX_TYPE_UINT32);
		// Bind the descriptor set
		// Draw the model using indices
		vkCmdDrawIndexed(commandBuffer, static_cast<u32>(pDrawPacket->indicesCount), 1, 0, 0, 0);