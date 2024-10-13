#include "Handlers/Input.hpp"
	Model* Scene::LoadModel(const std::string& modelPath, const std::string& texturePath)
		Model* model = new Model();
		m_pModelsWaiting.push(model);
		return model;
		if (Input::IsKeyPressed(GLFW_KEY_0)) {
			Model* newModel = LoadModel(
				"/home/acoezard/lab/better-than-nothing/Assets/Models/42/42.obj",
				"/home/acoezard/lab/better-than-nothing/Assets/Models/42/42.jpg"
			);
			newModel->SetRotation(glm::vec3(30.0f * (f32) glfwGetTime()));
		}

		if (m_pModels.size() > 0) {
			m_pModels[0]->SetPosition(glm::vec3(3.0f, 0.0f, 0.0f));
			m_pModels[0]->SetRotation(glm::vec3(0.0f, (f32) rotation, 0.0f));
			m_pModels[1]->SetRotation(glm::vec3((f32) rotation, 0.0f, 0.0f));
		}