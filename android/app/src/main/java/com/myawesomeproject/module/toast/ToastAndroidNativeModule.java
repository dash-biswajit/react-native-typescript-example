package com.myawesomeproject.module.toast;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import javax.annotation.Nullable;

import java.util.HashMap;
import java.util.Map;

/**
 * Copyright (c) 2016 DigitasLBi. All rights reserved.
 *
 * Created on 08/08/2017.
 */
public class ToastAndroidNativeModule extends ReactContextBaseJavaModule {

    private static final String NAME = "ToastAndroidNativeModule";
    private static final String CONSTANT_SHORT = "SHORT";
    private static final String CONSTANT_LONG = "LONG";
    private static final Map<String, Object> CONSTANTS = new HashMap<>();

    static {
        CONSTANTS.put(CONSTANT_SHORT, Toast.LENGTH_SHORT);
        CONSTANTS.put(CONSTANT_LONG, Toast.LENGTH_LONG);
    }

    public ToastAndroidNativeModule(final ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return NAME;
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return CONSTANTS;
    }

    @ReactMethod
    public void showToast(final String message, final int duration) {
        Toast.makeText(getReactApplicationContext(), "Native: " + message, duration).show();
    }

    @ReactMethod
    public void showMe() {
        Toast.makeText(getReactApplicationContext(), "Native showme", Toast.LENGTH_SHORT).show();
    }
}
