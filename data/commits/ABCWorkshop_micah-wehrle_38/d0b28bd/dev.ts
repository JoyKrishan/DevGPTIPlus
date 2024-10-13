  // Sidebar menu items to be dynamically generated from the array below. See MenuItem documentation for implementation help. Far future feature: convert to class and add service file for more advanced control over sidebar elements (such as disabling and enabling at will).
/**
 * @description For use with the header sidebar menu. Allows the creation of an array of objects to generate the sidebar links
 */
export interface MenuItem {
  /** @property Greys out sidebar elements so they cannot be clicked */ 
  /** @property The text to be displayed in the sidebar */
  /** @property The path to route to when clicked */
  /** @property Image data for displaying at the end of the menu line item */
    /** @property Asset path for the image */
    /** @property Alt text for the image */
    /** @property Width of the image */
    /** @property Height of the image */
  /** @property Allows for a dropdown menu of more MenuItems. Cannot be doubly nested. */
  /** @property I found that the callback function is technically executed after the router loads the new page */
  /** @property isHr should only be used by itself, as all other properties will be ignored when isHr is present */