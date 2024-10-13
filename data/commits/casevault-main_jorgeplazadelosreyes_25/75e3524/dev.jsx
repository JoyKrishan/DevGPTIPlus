        const response = await fetch("src/assets/default_case_img.webp");
        const blob = await response.blob();
        const defaultImg = new File([blob], "default_case_img.webp");
        const formData = new FormData();
        formData.append('case[user_id]', currentUser.id);
        formData.append('case[main_image]', defaultImg);
            const response = await createCase(formData);
                                <CaseCard title={caseData.title} description={caseData.description} image_url={caseData.main_image_url} />