package com.myawesomeproject.module.ui;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Copyright (c) 2016 DigitasLBi. All rights reserved.
 *
 * Created on 09/08/2017.
 */
public class UIPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(final ReactApplicationContext reactContext) {
        final List<NativeModule> nativeModules = new ArrayList<>();
        nativeModules.add(new UIAndroidNativeModule(reactContext));
        return nativeModules;
    }

    @Override
    public List<ViewManager> createViewManagers(final ReactApplicationContext reactContext) {
        return Collections.EMPTY_LIST;
    }
}
