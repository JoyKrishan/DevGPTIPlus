
#include <BetterThanNothing.hpp>
		Scene* pScene = CreateScene("world");

		auto pCamera = pScene->InitCamera(0.0, 0.0, 400.0, 0.0f, 0.0f);
		pCamera->SetPerspectiveProjection(glm::radians(45.0f), 0.1f, 1000000.0f);