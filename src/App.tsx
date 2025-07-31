import { CategoryGrid } from "./components/CategoryGrid";
import { SubCategoryList } from "./components/SubCategoryList";
import { TrackList } from "./components/TrackList";
import { Breadcrumb } from "./components/Breadcrumb";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { useNavigation } from "./hooks/useNavigation";
import { useDarkMode } from "./hooks/useDarkMode";
import { musicData } from "./data/musicData";

function App() {
  const {
    navigationState,
    navigateToCategory,
    navigateToSubCategory,
    navigateBack,
    navigateToHome,
  } = useNavigation();

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Debug logging
  console.log('App render - Navigation State:', {
    level: navigationState.level,
    hasCurrentCategory: !!navigationState.currentCategory,
    currentCategoryName: navigationState.currentCategory?.name,
    hasCurrentSubCategory: !!navigationState.currentSubCategory,
    breadcrumb: navigationState.breadcrumb,
  });

  const handleBreadcrumbNavigate = (index: number) => {
    if (index === 0) {
      navigateToHome();
    } else if (index === 1 && navigationState.level === "tracks") {
      navigateBack();
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Dark Mode Toggle */}
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      
      {/* Breadcrumb Navigation */}
      {navigationState.level !== "main" && (
        <div className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 px-4 py-3 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto flex items-center">
            <Breadcrumb
              items={navigationState.breadcrumb}
              onNavigate={handleBreadcrumbNavigate}
            />
          </div>
        </div>
      )}

      {/* Main Content with Sliding Animation */}
      <div className="relative overflow-hidden">
        <div
          className={`
            transition-transform duration-200 ease-out flex
            ${navigationState.level === "main" ? "translate-x-0" : ""}
            ${navigationState.level === "category" ? "-translate-x-1/3" : ""}
            ${navigationState.level === "tracks" ? "-translate-x-2/3" : ""}
          `}
          style={{ width: "300%" }}
        >
          {/* Main Categories View */}
          <div className="w-1/3 flex-shrink-0">
            <CategoryGrid
              categories={musicData.categories}
              onCategorySelect={navigateToCategory}
            />
          </div>

          {/* Subcategories View */}
          <div className="w-1/3 flex-shrink-0">
            {navigationState.currentCategory && (
              <SubCategoryList
                category={navigationState.currentCategory}
                onSubCategorySelect={navigateToSubCategory}
                onBack={navigateBack}
              />
            )}
          </div>

          {/* Tracks View */}
          <div className="w-1/3 flex-shrink-0">
            {navigationState.currentCategory &&
              navigationState.currentSubCategory && (
                <TrackList
                  category={navigationState.currentCategory}
                  subCategory={navigationState.currentSubCategory}
                  onBack={navigateBack}
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
