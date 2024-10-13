void DescriptorPool::TransferDescriptors(VkDescriptorPool& newDescriptorPool)
{
    // Pour chaque ensemble de descripteurs dans chaque frame
    for (u32 i = 0; i < MAX_FRAMES_IN_FLIGHT; ++i) {
        for (u32 j = 0; j < m_Entities.size(); ++j) {
            VkDescriptorSet oldDescriptorSet = m_Entities[j]->GetDescriptorSets()[i];

            // Allouez un nouvel ensemble de descripteurs dans le nouveau pool
            VkDescriptorSetAllocateInfo allocInfo{};
            allocInfo.sType = VK_STRUCTURE_TYPE_DESCRIPTOR_SET_ALLOCATE_INFO;
            allocInfo.descriptorPool = newDescriptorPool;
            allocInfo.descriptorSetCount = 1;
            allocInfo.pSetLayouts = &m_DescriptorSetLayout;

            if (vkAllocateDescriptorSets(m_pDevice->GetVkDevice(), &allocInfo, &(m_Entities[j]->GetDescriptorSets()[i])) != VK_SUCCESS) {
                throw std::runtime_error("failed to allocate descriptor sets!");
            }

            // Copiez les descripteurs de l'ancien ensemble vers le nouveau
            CopyDescriptors(oldDescriptorSet, m_Entities[j]->GetDescriptorSets()[i]);

            // Libérez l'ancien ensemble de descripteurs
            vkFreeDescriptorSets(m_pDevice->GetVkDevice(), m_DescriptorPool, 1, &oldDescriptorSet);
        }
    }
}

void DescriptorPool::CopyDescriptors(VkDescriptorSet srcDescriptorSet, VkDescriptorSet dstDescriptorSet)
{
    // Copiez les descripteurs de srcDescriptorSet à dstDescriptorSet
    // Vous pouvez utiliser vkUpdateDescriptorSets avec VK_DESCRIPTOR_COPY command

    // Exemple (à adapter à votre situation) :
    VkCopyDescriptorSet copyDescriptorSet{};
    copyDescriptorSet.sType = VK_STRUCTURE_TYPE_COPY_DESCRIPTOR_SET;
    copyDescriptorSet.srcSet = srcDescriptorSet;
    copyDescriptorSet.dstSet = dstDescriptorSet;
    copyDescriptorSet.descriptorCount = 1;
    copyDescriptorSet.pNext = nullptr;

    vkUpdateDescriptorSets(m_pDevice->GetVkDevice(), 0, nullptr, 1, &copyDescriptorSet);
}

void DescriptorPool::UpdateDescriptors(Entity* entity)
{
    auto device = m_pDevice->GetVkDevice();

    // Mise à jour des descripteurs pour l'entité (comme vous le faites actuellement)
    // ...

    // N'oubliez pas de mettre à jour les références vers les descripteurs mis à jour
    // dans le tableau m_Entities[j]->GetDescriptorSets()[i]
}