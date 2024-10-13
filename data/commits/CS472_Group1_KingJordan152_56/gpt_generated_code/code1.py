try:
    # Make the video fullscreen by double clicking on it
    wait.until(visible((By.XPATH, '//*[@id="movie_player"]/div[1]/video')))
    video = driver.find_element_by_xpath(
        '//*[@id="movie_player"]/div[1]/video')

    # Double click the video to fullscreen it
    action = ActionChains(driver)
    action.double_click(video).perform()

    # Skip whatever ad is playing, if there is one
    wait.until(EC.element_to_be_clickable(
        (By.CLASS_NAME, 'ytp-ad-skip-button-container')))
    driver.find_element_by_class_name(
        'ytp-ad-skip-button-container').click()

except NoSuchElementException:
    print("No videos with that title were found! Please try again.")
    quit()

except TimeoutException:
    print("Either the ad was unskippable or nonexistent.")