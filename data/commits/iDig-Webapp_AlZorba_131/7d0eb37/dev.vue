          <q-icon
            v-if="isDisplayedArray[index]"
            name="keyboard_arrow_down"
          /><q-icon
            v-if="!isDisplayedArray[index]"
            name="keyboard_arrow_right"
          />{{ trenchGroupName }}</label