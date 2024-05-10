import { Suspense } from "react";
import { InfinitySpin } from "react-loader-spinner";
import PropTypes from "prop-types";

function LazyLoader({ children }) {
  return (
    <div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}

const Loading = () => {
  return (
    <div className="lazy-loader-wrapper">
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

LazyLoader.propTypes = {
  children: PropTypes.object,
};

export default LazyLoader;
