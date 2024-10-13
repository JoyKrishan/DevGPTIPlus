            int currentUsageIndex = GetUsageIndex(property);
            int newUsageIndex = -1;

                        bool isUsageSetByUser = (currentUsageIndex == index);
                        
                        if (isUsageSetByUser)
                            return;

                        bool isNewUsageIndexSet = (newUsageIndex > -1);
                        
                        if (!isNewUsageIndexSet)
                            newUsageIndex = index;
                        
                        break;
            
            SetUsageIndex(property, newUsageIndex);