> 固定宽度靠右

:::demo 固定宽度靠右 `lableWidth` `textAlign`。

```html
<template>
  <div>
    <v-row>
        <v-col :span="12">
          <v-form-view title="Full Name" textAlign="right" lableWidth="120px" content="Lily" ></v-form-view>
        </v-col>
        <v-col :span="12">
          <v-form-view title="Account" textAlign="right" lableWidth="120px" content="vcu@example.com" ></v-form-view>
        </v-col>
      </v-row>
      <v-row>
        <v-col :span="12">
          <v-form-view title="City" textAlign="right" lableWidth="120px" content="HangZhou" ></v-form-view>
        </v-col>
        <v-col :span="12">
          <v-form-view title="Country" textAlign="right" lableWidth="120px" content="China🇨🇳" ></v-form-view>
        </v-col>
      </v-row>
      <v-row>
        <v-col :span="12">
          <v-form-view title="Birthday" textAlign="right" lableWidth="120px" content="February 2,1900" ></v-form-view>
        </v-col>
        <v-col :span="12">
          <v-form-view title="Website" textAlign="right" lableWidth="120px" content="-" ></v-form-view>
        </v-col>
      </v-row>
      <v-row>
        <v-col :span="12">
          <v-form-view
            textAlign="right" lableWidth="120px"
            title="Message"
            content="Make things as simple as possible but no simpler."
          ></v-form-view>
        </v-col>
      </v-row>
  </div>
</template>
```
:::