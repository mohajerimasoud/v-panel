import React from "react";

import { ConfigProvider } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import { Persian } from "./antd.persian";

const persianAppConfig = {
  form: { validateMessages: Persian },
  locale: fa_IR
};

const AntdConfig: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider direction="rtl" {...persianAppConfig}>
      <div style={{ direction: "rtl" }}>{children}</div>
    </ConfigProvider>
  );
};

export default AntdConfig;
