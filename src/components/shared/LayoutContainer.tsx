
interface layoutChildrenInterface {
    children: React.ReactNode
}

const LayoutContainer = ({children}:layoutChildrenInterface) => {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-3">
        {children}
    </div>
  )
}

export default LayoutContainer