package com.myawesomeproject.module.ui;

import android.content.res.Resources;
import android.util.DisplayMetrics;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Copyright (c) 2016 DigitasLBi. All rights reserved.
 *
 * Created on 09/08/2017.
 */
public class UIAndroidNativeModule extends ReactContextBaseJavaModule {

    private static final String NAME = "UIAndroidNativeModule";

    public UIAndroidNativeModule(final ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void getScreenSize(final Callback callback) {
        final DisplayMetrics displayMetrics = Resources.getSystem().getDisplayMetrics();
        callback.invoke(displayMetrics.density, displayMetrics.densityDpi,
                displayMetrics.heightPixels, displayMetrics.widthPixels);
    }
}
