<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteCollectionEntity>
   <description></description>
   <name>TSC - Override TSC - Android(1) - iOS (1)</name>
   <tag></tag>
   <delayBetweenInstances>0</delayBetweenInstances>
   <executionMode>SEQUENTIAL</executionMode>
   <maxConcurrentInstances>8</maxConcurrentInstances>
   <testSuiteRunConfigurations>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <requireConfigurationData>true</requireConfigurationData>
            <runConfigurationData>
               <entry>
                  <key>testCloudEnvironment</key>
                  <value>{
  &quot;id&quot;: 101,
  &quot;os&quot;: &quot;android&quot;,
  &quot;osDisplayName&quot;: &quot;Android&quot;,
  &quot;browserName&quot;: &quot;chrome&quot;,
  &quot;browserDisplayName&quot;: &quot;Chrome&quot;,
  &quot;browserVersion&quot;: &quot;latest&quot;,
  &quot;usingTunnel&quot;: false,
  &quot;timeout&quot;: 15
}</value>
               </entry>
            </runConfigurationData>
            <runConfigurationId>TestCloud</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/healthcare-tests - TS_RegressionTest (1)</testSuiteEntity>
      </TestSuiteRunConfiguration>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <requireConfigurationData>true</requireConfigurationData>
            <runConfigurationData>
               <entry>
                  <key>testCloudEnvironment</key>
                  <value>{
  &quot;id&quot;: 102,
  &quot;os&quot;: &quot;ios&quot;,
  &quot;osDisplayName&quot;: &quot;iOS&quot;,
  &quot;browserName&quot;: &quot;safari&quot;,
  &quot;browserDisplayName&quot;: &quot;Safari&quot;,
  &quot;browserVersion&quot;: &quot;latest&quot;,
  &quot;usingTunnel&quot;: false,
  &quot;timeout&quot;: 15
}</value>
               </entry>
            </runConfigurationData>
            <runConfigurationId>TestCloud</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/healthcare-tests - TS_RegressionTest (1)</testSuiteEntity>
      </TestSuiteRunConfiguration>
   </testSuiteRunConfigurations>
</TestSuiteCollectionEntity>
