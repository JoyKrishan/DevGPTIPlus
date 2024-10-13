using LibreHardwareMonitor.Hardware.Controller.AeroCool;

namespace OhmGraphite
        public bool UseHttps { get; }
        public PrometheusConfig(int port, string host, bool useHttps)
            UseHttps = useHttps;
            if (!bool.TryParse(config["prometheus_https"], out bool useHttps))
            {
                useHttps = false;
            }
            return new PrometheusConfig(port, host, useHttps);