import VeeValidate     from 'vee-validate';
import { HttpService } from './app/shared/services/HttpService';

import VueGrid from './app/shared/components/VueGrid/VueGrid.vue';
import VueGridItem from './app/shared/components/VueGridItem/VueGridItem.vue';
import VueButton from './app/shared/components/VueButton/VueButton.vue';
import VueLoader from './app/shared/components/VueLoader/VueLoader.vue';
import VuePanel from './app/shared/components/VuePanel/VuePanel.vue';
import VueNavBar from './app/shared/components/VueNavBar/VueNavBar.vue';
import VuePanelHeader from './app/shared/components/VuePanel/VuePanelHeader/VuePanelHeader.vue';
import VuePanelBody from './app/shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
import VuePanelFooter from './app/shared/components/VuePanel/VuePanelFooter/VuePanelFooter.vue';
import VueInput from './app/shared/components/VueInput/VueInput.vue';
import VueCollapse from './app/shared/components/VueCollapse/VueCollapse.vue';
import VueModal from './app/shared/components/VueModal/VueModal.vue';
import VueTabGroup from './app/shared/components/VueTabGroup/VueTabGroup.vue';
import VueTabItem from './app/shared/components/VueTabGroup/VueTabItem/VueTabItem.vue';
import VueCheckbox from './app/shared/components/VueCheckbox/VueCheckbox.vue';
import VueTooltip from './app/shared/components/VueTooltip/VueTooltip.vue';
import VueSlider from './app/shared/components/VueSlider/VueSlider.vue';
import VueAccordion from './app/shared/components/VueAccordion/VueAccordion.vue';
import VueAccordionItem from './app/shared/components/VueAccordion/VueAccordionItem/VueAccordionItem.vue';
import VuePagination from './app/shared/components/VuePagination/VuePagination.vue';
import VueSelect from './app/shared/components/VueSelect/VueSelect.vue';
import VueCalendar from './app/shared/components/VueCalendar/VueCalendar.vue';
import VueDatePicker from './app/shared/components/VueDatePicker/VueDatePicker.vue';
import VueDateRangePicker from './app/shared/components/VueDateRangePicker/VueDateRangePicker.vue';
import VueNotificationStack from './app/shared/components/VueNotificationStack/VueNotificationStack.vue';
import { addNotification, INotification } from './app/shared/components/VueNotificationStack/utils';
import VueMarkdown from './app/shared/components/VueMarkdown/VueMarkdown.vue';
import VueGridRow from './app/shared/components/VueGridRow/VueGridRow.vue';
import VueAutocomplete from './app/shared/components/VueAutocomplete/VueAutocomplete.vue';
import { AutocompleteOptionsFixture } from './app/shared/components/VueAutocomplete/fixtures/IAutocompleteFixture';
import VueBadge from './app/shared/components/VueBadge/VueBadge.vue';
import { IAutocompleteOption } from './app/shared/components/VueAutocomplete/IAutocompleteOption';
import VueTruncate from './app/shared/components/VueTruncate/VueTruncate.vue';
import VueCarousel from './app/shared/components/VueCarousel/VueCarousel.vue';
import VueDataTable from './app/shared/components/VueDataTable/VueDataTable.vue';
import { dataTableDataFixture, dataTableHeaderFixture } from './app/shared/components/VueDataTable/DataTableFixtures';
import VueToggle from './app/shared/components/VueToggle/VueToggle.vue';

const components = {
  VueToggle,
  VueDataTable,
  VueCarousel,
  VueTruncate,
  VueBadge,
  VueAutocomplete,
  VueMarkdown,
  VueGrid,
  VueGridItem,
  VueButton,
  VueLoader,
  VuePanel,
  VuePanelHeader,
  VuePanelBody,
  VuePanelFooter,
  VueNavBar,
  VueInput,
  VueCollapse,
  VueModal,
  VueTabGroup,
  VueTabItem,
  VueCheckbox,
  VueTooltip,
  VueNotificationStack,
  VueSlider,
  VueAccordion,
  VueAccordionItem,
  VuePagination,
  VueSelect,
  VueCalendar,
  VueDatePicker,
  VueDateRangePicker,
  VueGridRow,
}

const LibraryModule = {
  ...components,

  install(Vue, options) {
    if(!options.store) {
      console.error('You must provide the vuex store as an option of Vue.use(\'VueUi\')');
    }
    HttpService.store = options.store;
    Vue.use(VeeValidate, { inject: false });
    // Register components with vue
    Object.keys(components).forEach(name => {
      Vue.component(name, components[name]);
    });
  }
};

// Export library
export default LibraryModule;

// Export components
//export components;


