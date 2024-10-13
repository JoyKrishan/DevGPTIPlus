# Last edited 2/21/24
from selenium.common.exceptions import NoSuchElementException, TimeoutException
    # Make the video fullscreen by double clicking on it
    # Double click the video to fullscreen it
    action = ActionChains(driver)
    action.double_click(video).perform()
    # Skip whatever ad is playing, if there is one

except NoSuchElementException:
    print("No videos with that title were found! Please try again.")

except TimeoutException:
    print("Either the ad was unskippable or nonexistent.")