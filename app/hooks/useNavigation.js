function useNavigation(navigation) {
  const navigate = (screenName) => navigation.navigate(screenName);
  return navigate;
}

export default useNavigation;
