		// Sort the draw packets by pipeline
		std::sort(m_DrawPackets.begin(), m_DrawPackets.end(), [](const DrawPacket& a, const DrawPacket& b){
			// TODO: use pipeline ID to sort draw packets
			return true;
		});
		// Copy the draw packets sorted by pipeline into allocated memory
		DrawPacket* drawPackets = new DrawPacket[m_Size];
		std::copy(m_DrawPackets.begin(), m_DrawPackets.end(), drawPackets);
		// Create the draw stream using the sorted draw packets
		DrawStream* drawStream = new DrawStream();
		drawStream->m_Size = m_Size;
		drawStream->m_DrawPackets = drawPackets;