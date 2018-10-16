import Tabs from './tabs'
import TabPane from '../vc-tabs/src/TabPane'
import TabContent from '../vc-tabs/src/TabContent'
Tabs.TabPane = { ...TabPane, name: 'VTabPane', __ANT_TAB_PANE: true }
Tabs.TabContent = { ...TabContent, name: 'VTabContent' }
export default Tabs
export { TabPane, TabContent }
