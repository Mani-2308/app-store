import './index.css'

const TabItem = props => {
  const {tabId, displayText, clickTabItem, isActive} = props

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab' : ''

  return (
    <li>
      <button
        type="button"
        className={`tab-item ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
