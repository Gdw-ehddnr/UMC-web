function Ad({ shouldDisplay }) {
    if (!shouldDisplay) {
      return null;
    }
  
    return (
      <img src="/img/ad-banner.svg" alt="Ad Banner" />
    );
  }
  
  export default Ad;