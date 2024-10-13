# This program demonstrates how the Python web scraping module Selenium can be used to open a Chrome process, automatically search
# something up on YouTube, and play the first video result. As an added flex, this program can also fullscreen both the Chrome process
# and the YouTube video, and it can skip an ad if one is playing.
# Written by Jordan King
# Last edited 1/13/21

from selenium import webdriver
# Let's the ENTER key be sent
from selenium.webdriver.common.keys import Keys
# Used for waiting until the video loads
from selenium.webdriver.common.by import By
# Used for waiting until the video loads
from selenium.webdriver.support.ui import WebDriverWait
# Used for waiting until the video loads
from selenium.webdriver.support import expected_conditions as EC
# Allows for double clicking
from selenium.webdriver import ActionChains

# Ask the user what video they would like to search up
user_choice = input("What video would you like to search for? ")

# Designate the Chrome webdriver, then assign it the YouTube URL
driver = webdriver.Chrome()
driver.get('https://youtube.com')
driver.maximize_window()

# Variables used to assess whether or not the search query has fully loaded onto the page
wait = WebDriverWait(driver, 10)
visible = EC.visibility_of_element_located

# Search for the desired video
search_bar = driver.find_element_by_xpath(
    '/html/body/ytd-app/div/div/ytd-masthead/div[3]/div[2]/ytd-searchbox/form/div/div[1]/input')  # Assigns the search YouTube element to search_bar\
search_bar.send_keys(
    user_choice)  # Physically types this into the search bar
search_bar.send_keys(Keys.RETURN)  # Enters the search query

# Wait until the video has fully loaded onto the screen
wait.until(visible((By.XPATH, '//*[@id="video-title"]/yt-formatted-string')))
# Click on the video has soon as it has loaded from the query
driver.find_element_by_xpath(
    '//*[@id="video-title"]/yt-formatted-string').click()

# Make the video fullscreen by double clicking on it
try:
    wait.until(visible((By.XPATH, '//*[@id="movie_player"]/div[1]/video')))
    video = driver.find_element_by_xpath(
        '//*[@id="movie_player"]/div[1]/video')
except:
    print("No videos with that title were found! Please try again.")
    quit()

# Double click the video to fullscreen it
action = ActionChains(driver)
action.double_click(video).perform()

# Skip whatever ad is playing, if there is one
try:
    wait.until(EC.element_to_be_clickable(
        (By.CLASS_NAME, 'ytp-ad-skip-button-container')))
    driver.find_element_by_class_name(
        'ytp-ad-skip-button-container').click()
except:
    print("Ad was probably either unskipable or nonexistent.")