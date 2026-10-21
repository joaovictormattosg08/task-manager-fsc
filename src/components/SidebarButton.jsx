const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant == 'unselected') {
      return 'text-[#36383E] rounded-lg'
    }

    if (variant == 'selected') {
      return 'rounded-lg bg-[#E6F7F8] text-[#00ADB5]'
    }
  }
  return (
    <a href="#" className={`px-6 py-3 ${getVariantClasses()}`}>
      {children}
    </a>
  )
}

export default SidebarButton
