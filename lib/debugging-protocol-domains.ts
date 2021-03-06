/**
 * Debugging Protocol 1.1 Domains
 * Generated on Wed Feb 10 2016 15:20:19 GMT-0800 (PST)
 */
import { IDebuggingProtocolClient } from "chrome-debugging-client";
export class Inspector {
  private _evaluateForTestInFrontend: Inspector.evaluateForTestInFrontend_Handler = undefined;
  private _inspect: Inspector.inspect_Handler = undefined;
  private _detached: Inspector.detached_Handler = undefined;
  private _targetCrashed: Inspector.targetCrashed_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables inspector domain notifications. */
  enable(): Promise<void> {
    return this._client.send<void>("Inspector.enable");
  }
  /** Disables inspector domain notifications. */
  disable(): Promise<void> {
    return this._client.send<void>("Inspector.disable");
  }
  get evaluateForTestInFrontend(): Inspector.evaluateForTestInFrontend_Handler {
    return this._evaluateForTestInFrontend;
  }
  set evaluateForTestInFrontend(handler: Inspector.evaluateForTestInFrontend_Handler) {
    if (this._evaluateForTestInFrontend) {
      this._client.removeListener("Inspector.evaluateForTestInFrontend", this._evaluateForTestInFrontend);
    }
    this._evaluateForTestInFrontend = handler;
    if (handler) {
      this._client.on("Inspector.evaluateForTestInFrontend", handler);
    }
  }
  get inspect(): Inspector.inspect_Handler {
    return this._inspect;
  }
  set inspect(handler: Inspector.inspect_Handler) {
    if (this._inspect) {
      this._client.removeListener("Inspector.inspect", this._inspect);
    }
    this._inspect = handler;
    if (handler) {
      this._client.on("Inspector.inspect", handler);
    }
  }
  /** Fired when remote debugging connection is about to be terminated. Contains detach reason. */
  get detached(): Inspector.detached_Handler {
    return this._detached;
  }
  set detached(handler: Inspector.detached_Handler) {
    if (this._detached) {
      this._client.removeListener("Inspector.detached", this._detached);
    }
    this._detached = handler;
    if (handler) {
      this._client.on("Inspector.detached", handler);
    }
  }
  /** Fired when debugging target has crashed */
  get targetCrashed(): Inspector.targetCrashed_Handler {
    return this._targetCrashed;
  }
  set targetCrashed(handler: Inspector.targetCrashed_Handler) {
    if (this._targetCrashed) {
      this._client.removeListener("Inspector.targetCrashed", this._targetCrashed);
    }
    this._targetCrashed = handler;
    if (handler) {
      this._client.on("Inspector.targetCrashed", handler);
    }
  }
}
export namespace Inspector {
  export type evaluateForTestInFrontend_Parameters = {
    testCallId: number;
    script: string;
  };
  export type evaluateForTestInFrontend_Handler = (params: evaluateForTestInFrontend_Parameters) => void;
  export type inspect_Parameters = {
    object: Runtime.RemoteObject;
    hints: any;
  };
  export type inspect_Handler = (params: inspect_Parameters) => void;
  export type detached_Parameters = {
    /** The reason why connection has been terminated. */
    reason: string;
  };
  export type detached_Handler = (params: detached_Parameters) => void;
  export type targetCrashed_Handler = () => void;
}
export class Memory {
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  getDOMCounters(): Promise<Memory.getDOMCounters_Return> {
    return this._client.send<Memory.getDOMCounters_Return>("Memory.getDOMCounters");
  }
  /** Enable/disable suppressing memory pressure notifications in all processes. */
  setPressureNotificationsSuppressed(params: Memory.setPressureNotificationsSuppressed_Parameters): Promise<void> {
    return this._client.send<void>("Memory.setPressureNotificationsSuppressed", params);
  }
  /** Simulate a memory pressure notification in all processes. */
  simulatePressureNotification(params: Memory.simulatePressureNotification_Parameters): Promise<void> {
    return this._client.send<void>("Memory.simulatePressureNotification", params);
  }
}
export namespace Memory {
  /** Memory pressure level. */
  export type PressureLevel = "moderate" | "critical";
  export type getDOMCounters_Return = {
    documents: number;
    nodes: number;
    jsEventListeners: number;
  };
  export type setPressureNotificationsSuppressed_Parameters = {
    /** If true, memory pressure notifications will be suppressed. */
    suppressed: boolean;
  };
  export type simulatePressureNotification_Parameters = {
    /** Memory pressure level of the notification. */
    level: PressureLevel;
  };
}
/** Actions and events related to the inspected page belong to the page domain. */
export class Page {
  private _domContentEventFired: Page.domContentEventFired_Handler = undefined;
  private _loadEventFired: Page.loadEventFired_Handler = undefined;
  private _frameAttached: Page.frameAttached_Handler = undefined;
  private _frameNavigated: Page.frameNavigated_Handler = undefined;
  private _frameDetached: Page.frameDetached_Handler = undefined;
  private _frameStartedLoading: Page.frameStartedLoading_Handler = undefined;
  private _frameStoppedLoading: Page.frameStoppedLoading_Handler = undefined;
  private _frameScheduledNavigation: Page.frameScheduledNavigation_Handler = undefined;
  private _frameClearedScheduledNavigation: Page.frameClearedScheduledNavigation_Handler = undefined;
  private _frameResized: Page.frameResized_Handler = undefined;
  private _javascriptDialogOpening: Page.javascriptDialogOpening_Handler = undefined;
  private _javascriptDialogClosed: Page.javascriptDialogClosed_Handler = undefined;
  private _screencastFrame: Page.screencastFrame_Handler = undefined;
  private _screencastVisibilityChanged: Page.screencastVisibilityChanged_Handler = undefined;
  private _colorPicked: Page.colorPicked_Handler = undefined;
  private _interstitialShown: Page.interstitialShown_Handler = undefined;
  private _interstitialHidden: Page.interstitialHidden_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables page domain notifications. */
  enable(): Promise<void> {
    return this._client.send<void>("Page.enable");
  }
  /** Disables page domain notifications. */
  disable(): Promise<void> {
    return this._client.send<void>("Page.disable");
  }
  addScriptToEvaluateOnLoad(params: Page.addScriptToEvaluateOnLoad_Parameters): Promise<Page.addScriptToEvaluateOnLoad_Return> {
    return this._client.send<Page.addScriptToEvaluateOnLoad_Return>("Page.addScriptToEvaluateOnLoad", params);
  }
  removeScriptToEvaluateOnLoad(params: Page.removeScriptToEvaluateOnLoad_Parameters): Promise<void> {
    return this._client.send<void>("Page.removeScriptToEvaluateOnLoad", params);
  }
  /** Reloads given page optionally ignoring the cache. */
  reload(params: Page.reload_Parameters): Promise<void> {
    return this._client.send<void>("Page.reload", params);
  }
  /** Navigates current page to the given URL. */
  navigate(params: Page.navigate_Parameters): Promise<Page.navigate_Return> {
    return this._client.send<Page.navigate_Return>("Page.navigate", params);
  }
  /** Returns navigation history for the current page. */
  getNavigationHistory(params: Page.getNavigationHistory_Parameters): Promise<Page.getNavigationHistory_Return> {
    return this._client.send<Page.getNavigationHistory_Return>("Page.getNavigationHistory", params);
  }
  /** Navigates current page to the given history entry. */
  navigateToHistoryEntry(params: Page.navigateToHistoryEntry_Parameters): Promise<void> {
    return this._client.send<void>("Page.navigateToHistoryEntry", params);
  }
  /** Returns all browser cookies. Depending on the backend support, will return detailed cookie information in the <code>cookies</code> field. */
  getCookies(): Promise<Page.getCookies_Return> {
    return this._client.send<Page.getCookies_Return>("Page.getCookies");
  }
  /** Deletes browser cookie with given name, domain and path. */
  deleteCookie(params: Page.deleteCookie_Parameters): Promise<void> {
    return this._client.send<void>("Page.deleteCookie", params);
  }
  /** Returns present frame / resource tree structure. */
  getResourceTree(): Promise<Page.getResourceTree_Return> {
    return this._client.send<Page.getResourceTree_Return>("Page.getResourceTree");
  }
  /** Returns content of the given resource. */
  getResourceContent(params: Page.getResourceContent_Parameters): Promise<Page.getResourceContent_Return> {
    return this._client.send<Page.getResourceContent_Return>("Page.getResourceContent", params);
  }
  /** Searches for given string in resource content. */
  searchInResource(params: Page.searchInResource_Parameters): Promise<Page.searchInResource_Return> {
    return this._client.send<Page.searchInResource_Return>("Page.searchInResource", params);
  }
  /** Sets given markup as the document's HTML. */
  setDocumentContent(params: Page.setDocumentContent_Parameters): Promise<void> {
    return this._client.send<void>("Page.setDocumentContent", params);
  }
  /** Overrides the values of device screen dimensions (window.screen.width, window.screen.height, window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media query results). */
  setDeviceMetricsOverride(params: Page.setDeviceMetricsOverride_Parameters): Promise<void> {
    return this._client.send<void>("Page.setDeviceMetricsOverride", params);
  }
  /** Clears the overriden device metrics. */
  clearDeviceMetricsOverride(): Promise<void> {
    return this._client.send<void>("Page.clearDeviceMetricsOverride");
  }
  /** Overrides the Geolocation Position or Error. Omitting any of the parameters emulates position unavailable. */
  setGeolocationOverride(params: Page.setGeolocationOverride_Parameters): Promise<void> {
    return this._client.send<void>("Page.setGeolocationOverride", params);
  }
  /** Clears the overriden Geolocation Position and Error. */
  clearGeolocationOverride(): Promise<void> {
    return this._client.send<void>("Page.clearGeolocationOverride");
  }
  /** Overrides the Device Orientation. */
  setDeviceOrientationOverride(params: Page.setDeviceOrientationOverride_Parameters): Promise<void> {
    return this._client.send<void>("Page.setDeviceOrientationOverride", params);
  }
  /** Clears the overridden Device Orientation. */
  clearDeviceOrientationOverride(): Promise<void> {
    return this._client.send<void>("Page.clearDeviceOrientationOverride");
  }
  /** Toggles mouse event-based touch event emulation. */
  setTouchEmulationEnabled(params: Page.setTouchEmulationEnabled_Parameters): Promise<void> {
    return this._client.send<void>("Page.setTouchEmulationEnabled", params);
  }
  /** Capture page screenshot. */
  captureScreenshot(params: Page.captureScreenshot_Parameters): Promise<Page.captureScreenshot_Return> {
    return this._client.send<Page.captureScreenshot_Return>("Page.captureScreenshot", params);
  }
  /** Starts sending each frame using the <code>screencastFrame</code> event. */
  startScreencast(params: Page.startScreencast_Parameters): Promise<void> {
    return this._client.send<void>("Page.startScreencast", params);
  }
  /** Stops sending each frame in the <code>screencastFrame</code>. */
  stopScreencast(): Promise<void> {
    return this._client.send<void>("Page.stopScreencast");
  }
  /** Acknowledges that a screencast frame has been received by the frontend. */
  screencastFrameAck(params: Page.screencastFrameAck_Parameters): Promise<void> {
    return this._client.send<void>("Page.screencastFrameAck", params);
  }
  /** Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload). */
  handleJavaScriptDialog(params: Page.handleJavaScriptDialog_Parameters): Promise<void> {
    return this._client.send<void>("Page.handleJavaScriptDialog", params);
  }
  /** Shows / hides color picker */
  setColorPickerEnabled(params: Page.setColorPickerEnabled_Parameters): Promise<void> {
    return this._client.send<void>("Page.setColorPickerEnabled", params);
  }
  /** Sets overlay message. */
  setOverlayMessage(params: Page.setOverlayMessage_Parameters): Promise<void> {
    return this._client.send<void>("Page.setOverlayMessage", params);
  }
  get domContentEventFired(): Page.domContentEventFired_Handler {
    return this._domContentEventFired;
  }
  set domContentEventFired(handler: Page.domContentEventFired_Handler) {
    if (this._domContentEventFired) {
      this._client.removeListener("Page.domContentEventFired", this._domContentEventFired);
    }
    this._domContentEventFired = handler;
    if (handler) {
      this._client.on("Page.domContentEventFired", handler);
    }
  }
  get loadEventFired(): Page.loadEventFired_Handler {
    return this._loadEventFired;
  }
  set loadEventFired(handler: Page.loadEventFired_Handler) {
    if (this._loadEventFired) {
      this._client.removeListener("Page.loadEventFired", this._loadEventFired);
    }
    this._loadEventFired = handler;
    if (handler) {
      this._client.on("Page.loadEventFired", handler);
    }
  }
  /** Fired when frame has been attached to its parent. */
  get frameAttached(): Page.frameAttached_Handler {
    return this._frameAttached;
  }
  set frameAttached(handler: Page.frameAttached_Handler) {
    if (this._frameAttached) {
      this._client.removeListener("Page.frameAttached", this._frameAttached);
    }
    this._frameAttached = handler;
    if (handler) {
      this._client.on("Page.frameAttached", handler);
    }
  }
  /** Fired once navigation of the frame has completed. Frame is now associated with the new loader. */
  get frameNavigated(): Page.frameNavigated_Handler {
    return this._frameNavigated;
  }
  set frameNavigated(handler: Page.frameNavigated_Handler) {
    if (this._frameNavigated) {
      this._client.removeListener("Page.frameNavigated", this._frameNavigated);
    }
    this._frameNavigated = handler;
    if (handler) {
      this._client.on("Page.frameNavigated", handler);
    }
  }
  /** Fired when frame has been detached from its parent. */
  get frameDetached(): Page.frameDetached_Handler {
    return this._frameDetached;
  }
  set frameDetached(handler: Page.frameDetached_Handler) {
    if (this._frameDetached) {
      this._client.removeListener("Page.frameDetached", this._frameDetached);
    }
    this._frameDetached = handler;
    if (handler) {
      this._client.on("Page.frameDetached", handler);
    }
  }
  /** Fired when frame has started loading. */
  get frameStartedLoading(): Page.frameStartedLoading_Handler {
    return this._frameStartedLoading;
  }
  set frameStartedLoading(handler: Page.frameStartedLoading_Handler) {
    if (this._frameStartedLoading) {
      this._client.removeListener("Page.frameStartedLoading", this._frameStartedLoading);
    }
    this._frameStartedLoading = handler;
    if (handler) {
      this._client.on("Page.frameStartedLoading", handler);
    }
  }
  /** Fired when frame has stopped loading. */
  get frameStoppedLoading(): Page.frameStoppedLoading_Handler {
    return this._frameStoppedLoading;
  }
  set frameStoppedLoading(handler: Page.frameStoppedLoading_Handler) {
    if (this._frameStoppedLoading) {
      this._client.removeListener("Page.frameStoppedLoading", this._frameStoppedLoading);
    }
    this._frameStoppedLoading = handler;
    if (handler) {
      this._client.on("Page.frameStoppedLoading", handler);
    }
  }
  /** Fired when frame schedules a potential navigation. */
  get frameScheduledNavigation(): Page.frameScheduledNavigation_Handler {
    return this._frameScheduledNavigation;
  }
  set frameScheduledNavigation(handler: Page.frameScheduledNavigation_Handler) {
    if (this._frameScheduledNavigation) {
      this._client.removeListener("Page.frameScheduledNavigation", this._frameScheduledNavigation);
    }
    this._frameScheduledNavigation = handler;
    if (handler) {
      this._client.on("Page.frameScheduledNavigation", handler);
    }
  }
  /** Fired when frame no longer has a scheduled navigation. */
  get frameClearedScheduledNavigation(): Page.frameClearedScheduledNavigation_Handler {
    return this._frameClearedScheduledNavigation;
  }
  set frameClearedScheduledNavigation(handler: Page.frameClearedScheduledNavigation_Handler) {
    if (this._frameClearedScheduledNavigation) {
      this._client.removeListener("Page.frameClearedScheduledNavigation", this._frameClearedScheduledNavigation);
    }
    this._frameClearedScheduledNavigation = handler;
    if (handler) {
      this._client.on("Page.frameClearedScheduledNavigation", handler);
    }
  }
  get frameResized(): Page.frameResized_Handler {
    return this._frameResized;
  }
  set frameResized(handler: Page.frameResized_Handler) {
    if (this._frameResized) {
      this._client.removeListener("Page.frameResized", this._frameResized);
    }
    this._frameResized = handler;
    if (handler) {
      this._client.on("Page.frameResized", handler);
    }
  }
  /** Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) is about to open. */
  get javascriptDialogOpening(): Page.javascriptDialogOpening_Handler {
    return this._javascriptDialogOpening;
  }
  set javascriptDialogOpening(handler: Page.javascriptDialogOpening_Handler) {
    if (this._javascriptDialogOpening) {
      this._client.removeListener("Page.javascriptDialogOpening", this._javascriptDialogOpening);
    }
    this._javascriptDialogOpening = handler;
    if (handler) {
      this._client.on("Page.javascriptDialogOpening", handler);
    }
  }
  /** Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) has been closed. */
  get javascriptDialogClosed(): Page.javascriptDialogClosed_Handler {
    return this._javascriptDialogClosed;
  }
  set javascriptDialogClosed(handler: Page.javascriptDialogClosed_Handler) {
    if (this._javascriptDialogClosed) {
      this._client.removeListener("Page.javascriptDialogClosed", this._javascriptDialogClosed);
    }
    this._javascriptDialogClosed = handler;
    if (handler) {
      this._client.on("Page.javascriptDialogClosed", handler);
    }
  }
  /** Compressed image data requested by the <code>startScreencast</code>. */
  get screencastFrame(): Page.screencastFrame_Handler {
    return this._screencastFrame;
  }
  set screencastFrame(handler: Page.screencastFrame_Handler) {
    if (this._screencastFrame) {
      this._client.removeListener("Page.screencastFrame", this._screencastFrame);
    }
    this._screencastFrame = handler;
    if (handler) {
      this._client.on("Page.screencastFrame", handler);
    }
  }
  /** Fired when the page with currently enabled screencast was shown or hidden </code>. */
  get screencastVisibilityChanged(): Page.screencastVisibilityChanged_Handler {
    return this._screencastVisibilityChanged;
  }
  set screencastVisibilityChanged(handler: Page.screencastVisibilityChanged_Handler) {
    if (this._screencastVisibilityChanged) {
      this._client.removeListener("Page.screencastVisibilityChanged", this._screencastVisibilityChanged);
    }
    this._screencastVisibilityChanged = handler;
    if (handler) {
      this._client.on("Page.screencastVisibilityChanged", handler);
    }
  }
  /** Fired when a color has been picked. */
  get colorPicked(): Page.colorPicked_Handler {
    return this._colorPicked;
  }
  set colorPicked(handler: Page.colorPicked_Handler) {
    if (this._colorPicked) {
      this._client.removeListener("Page.colorPicked", this._colorPicked);
    }
    this._colorPicked = handler;
    if (handler) {
      this._client.on("Page.colorPicked", handler);
    }
  }
  /** Fired when interstitial page was shown */
  get interstitialShown(): Page.interstitialShown_Handler {
    return this._interstitialShown;
  }
  set interstitialShown(handler: Page.interstitialShown_Handler) {
    if (this._interstitialShown) {
      this._client.removeListener("Page.interstitialShown", this._interstitialShown);
    }
    this._interstitialShown = handler;
    if (handler) {
      this._client.on("Page.interstitialShown", handler);
    }
  }
  /** Fired when interstitial page was hidden */
  get interstitialHidden(): Page.interstitialHidden_Handler {
    return this._interstitialHidden;
  }
  set interstitialHidden(handler: Page.interstitialHidden_Handler) {
    if (this._interstitialHidden) {
      this._client.removeListener("Page.interstitialHidden", this._interstitialHidden);
    }
    this._interstitialHidden = handler;
    if (handler) {
      this._client.on("Page.interstitialHidden", handler);
    }
  }
}
export namespace Page {
  /** Resource type as it was perceived by the rendering engine. */
  export type ResourceType = "Document" | "Stylesheet" | "Image" | "Media" | "Font" | "Script" | "TextTrack" | "XHR" | "Fetch" | "EventSource" | "WebSocket" | "Manifest" | "Other";
  /** Unique frame identifier. */
  export type FrameId = string;
  /** Information about the Frame on the page. */
  export interface Frame {
    /** Frame unique identifier. */
    id: string;
    /** Parent frame identifier. */
    parentId?: string;
    /** Identifier of the loader associated with this frame. */
    loaderId: Network.LoaderId;
    /** Frame's name as specified in the tag. */
    name?: string;
    /** Frame document's URL. */
    url: string;
    /** Frame document's security origin. */
    securityOrigin: string;
    /** Frame document's mimeType as determined by the browser. */
    mimeType: string;
  }
  /** Information about the Frame hierarchy along with their cached resources. */
  export interface FrameResourceTree {
    /** Frame information for this tree item. */
    frame: Frame;
    /** Child frames. */
    childFrames?: FrameResourceTree[];
    /** Information about frame resources. */
    resources: { url: string; type: ResourceType; mimeType: string; failed?: boolean; canceled?: boolean; }[];
  }
  /** Unique script identifier. */
  export type ScriptIdentifier = string;
  /** Navigation history entry. */
  export interface NavigationEntry {
    /** Unique id of the navigation history entry. */
    id: number;
    /** URL of the navigation history entry. */
    url: string;
    /** Title of the navigation history entry. */
    title: string;
  }
  /** Screencast frame metadata */
  export interface ScreencastFrameMetadata {
    /** Top offset in DIP. */
    offsetTop: number;
    /** Page scale factor. */
    pageScaleFactor: number;
    /** Device screen width in DIP. */
    deviceWidth: number;
    /** Device screen height in DIP. */
    deviceHeight: number;
    /** Position of horizontal scroll in CSS pixels. */
    scrollOffsetX: number;
    /** Position of vertical scroll in CSS pixels. */
    scrollOffsetY: number;
    /** Frame swap timestamp. */
    timestamp?: number;
  }
  /** Javascript dialog type */
  export type DialogType = "alert" | "confirm" | "prompt" | "beforeunload";
  export type domContentEventFired_Parameters = {
    timestamp: number;
  };
  export type domContentEventFired_Handler = (params: domContentEventFired_Parameters) => void;
  export type loadEventFired_Parameters = {
    timestamp: number;
  };
  export type loadEventFired_Handler = (params: loadEventFired_Parameters) => void;
  export type frameAttached_Parameters = {
    /** Id of the frame that has been attached. */
    frameId: FrameId;
    /** Parent frame identifier. */
    parentFrameId: FrameId;
  };
  export type frameAttached_Handler = (params: frameAttached_Parameters) => void;
  export type frameNavigated_Parameters = {
    /** Frame object. */
    frame: Frame;
  };
  export type frameNavigated_Handler = (params: frameNavigated_Parameters) => void;
  export type frameDetached_Parameters = {
    /** Id of the frame that has been detached. */
    frameId: FrameId;
  };
  export type frameDetached_Handler = (params: frameDetached_Parameters) => void;
  export type frameStartedLoading_Parameters = {
    /** Id of the frame that has started loading. */
    frameId: FrameId;
  };
  export type frameStartedLoading_Handler = (params: frameStartedLoading_Parameters) => void;
  export type frameStoppedLoading_Parameters = {
    /** Id of the frame that has stopped loading. */
    frameId: FrameId;
  };
  export type frameStoppedLoading_Handler = (params: frameStoppedLoading_Parameters) => void;
  export type frameScheduledNavigation_Parameters = {
    /** Id of the frame that has scheduled a navigation. */
    frameId: FrameId;
    /** Delay (in seconds) until the navigation is scheduled to begin. The navigation is not guaranteed to start. */
    delay: number;
  };
  export type frameScheduledNavigation_Handler = (params: frameScheduledNavigation_Parameters) => void;
  export type frameClearedScheduledNavigation_Parameters = {
    /** Id of the frame that has cleared its scheduled navigation. */
    frameId: FrameId;
  };
  export type frameClearedScheduledNavigation_Handler = (params: frameClearedScheduledNavigation_Parameters) => void;
  export type frameResized_Handler = () => void;
  export type javascriptDialogOpening_Parameters = {
    /** Message that will be displayed by the dialog. */
    message: string;
    /** Dialog type. */
    type: DialogType;
  };
  export type javascriptDialogOpening_Handler = (params: javascriptDialogOpening_Parameters) => void;
  export type javascriptDialogClosed_Parameters = {
    /** Whether dialog was confirmed. */
    result: boolean;
  };
  export type javascriptDialogClosed_Handler = (params: javascriptDialogClosed_Parameters) => void;
  export type screencastFrame_Parameters = {
    /** Base64-encoded compressed image. */
    data: string;
    /** Screencast frame metadata. */
    metadata: ScreencastFrameMetadata;
    /** Frame number. */
    sessionId: number;
  };
  export type screencastFrame_Handler = (params: screencastFrame_Parameters) => void;
  export type screencastVisibilityChanged_Parameters = {
    /** True if the page is visible. */
    visible: boolean;
  };
  export type screencastVisibilityChanged_Handler = (params: screencastVisibilityChanged_Parameters) => void;
  export type colorPicked_Parameters = {
    /** RGBA of the picked color. */
    color: DOM.RGBA;
  };
  export type colorPicked_Handler = (params: colorPicked_Parameters) => void;
  export type interstitialShown_Handler = () => void;
  export type interstitialHidden_Handler = () => void;
  export type addScriptToEvaluateOnLoad_Parameters = {
    scriptSource: string;
  };
  export type addScriptToEvaluateOnLoad_Return = {
    /** Identifier of the added script. */
    identifier: ScriptIdentifier;
  };
  export type removeScriptToEvaluateOnLoad_Parameters = {
    identifier: ScriptIdentifier;
  };
  export type reload_Parameters = {
    /** If true, browser cache is ignored (as if the user pressed Shift+refresh). */
    ignoreCache?: boolean;
    /** If set, the script will be injected into all frames of the inspected page after reload. */
    scriptToEvaluateOnLoad?: string;
  };
  export type navigate_Parameters = {
    /** URL to navigate the page to. */
    url: string;
  };
  export type navigate_Return = {
    /** Frame id that will be navigated. */
    frameId: FrameId;
  };
  export type getNavigationHistory_Parameters = any;
  export type getNavigationHistory_Return = {
    /** Index of the current navigation history entry. */
    currentIndex: number;
    /** Array of navigation history entries. */
    entries: NavigationEntry[];
  };
  export type navigateToHistoryEntry_Parameters = {
    /** Unique id of the entry to navigate to. */
    entryId: number;
  };
  export type getCookies_Return = {
    /** Array of cookie objects. */
    cookies: Network.Cookie[];
  };
  export type deleteCookie_Parameters = {
    /** Name of the cookie to remove. */
    cookieName: string;
    /** URL to match cooke domain and path. */
    url: string;
  };
  export type getResourceTree_Return = {
    /** Present frame / resource tree structure. */
    frameTree: FrameResourceTree;
  };
  export type getResourceContent_Parameters = {
    /** Frame id to get resource for. */
    frameId: FrameId;
    /** URL of the resource to get content for. */
    url: string;
  };
  export type getResourceContent_Return = {
    /** Resource content. */
    content: string;
    /** True, if content was served as base64. */
    base64Encoded: boolean;
  };
  export type searchInResource_Parameters = {
    /** Frame id for resource to search in. */
    frameId: FrameId;
    /** URL of the resource to search in. */
    url: string;
    /** String to search for. */
    query: string;
    /** If true, search is case sensitive. */
    caseSensitive?: boolean;
    /** If true, treats string parameter as regex. */
    isRegex?: boolean;
  };
  export type searchInResource_Return = {
    /** List of search matches. */
    result: Debugger.SearchMatch[];
  };
  export type setDocumentContent_Parameters = {
    /** Frame id to set HTML for. */
    frameId: FrameId;
    /** HTML content to set. */
    html: string;
  };
  export type setDeviceMetricsOverride_Parameters = {
    /** Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override. */
    width: number;
    /** Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override. */
    height: number;
    /** Overriding device scale factor value. 0 disables the override. */
    deviceScaleFactor: number;
    /** Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text autosizing and more. */
    mobile: boolean;
    /** Whether a view that exceeds the available browser window area should be scaled down to fit. */
    fitWindow: boolean;
    /** Scale to apply to resulting view image. Ignored in |fitWindow| mode. */
    scale?: number;
    /** X offset to shift resulting view image by. Ignored in |fitWindow| mode. */
    offsetX?: number;
    /** Y offset to shift resulting view image by. Ignored in |fitWindow| mode. */
    offsetY?: number;
    /** Overriding screen width value in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|. */
    screenWidth?: number;
    /** Overriding screen height value in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|. */
    screenHeight?: number;
    /** Overriding view X position on screen in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|. */
    positionX?: number;
    /** Overriding view Y position on screen in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|. */
    positionY?: number;
  };
  export type setGeolocationOverride_Parameters = {
    /** Mock latitude */
    latitude?: number;
    /** Mock longitude */
    longitude?: number;
    /** Mock accuracy */
    accuracy?: number;
  };
  export type setDeviceOrientationOverride_Parameters = {
    /** Mock alpha */
    alpha: number;
    /** Mock beta */
    beta: number;
    /** Mock gamma */
    gamma: number;
  };
  export type setTouchEmulationEnabled_Parameters = {
    /** Whether the touch event emulation should be enabled. */
    enabled: boolean;
    /** Touch/gesture events configuration. Default: current platform. */
    configuration?: "mobile" | "desktop";
  };
  export type captureScreenshot_Parameters = any;
  export type captureScreenshot_Return = {
    /** Base64-encoded image data (PNG). */
    data: string;
  };
  export type startScreencast_Parameters = {
    /** Image compression format. */
    format?: "jpeg" | "png";
    /** Compression quality from range [0..100]. */
    quality?: number;
    /** Maximum screenshot width. */
    maxWidth?: number;
    /** Maximum screenshot height. */
    maxHeight?: number;
    /** Send every n-th frame. */
    everyNthFrame?: number;
  };
  export type screencastFrameAck_Parameters = {
    /** Frame number. */
    sessionId: number;
  };
  export type handleJavaScriptDialog_Parameters = {
    /** Whether to accept or dismiss the dialog. */
    accept: boolean;
    /** The text to enter into the dialog prompt before accepting. Used only if this is a prompt dialog. */
    promptText?: string;
  };
  export type setColorPickerEnabled_Parameters = {
    /** Shows / hides color picker */
    enabled: boolean;
  };
  export type setOverlayMessage_Parameters = {
    /** Overlay message to display when paused in debugger. */
    message?: string;
  };
}
/** This domain allows to control rendering of the page. */
export class Rendering {
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Requests that backend shows paint rectangles */
  setShowPaintRects(params: Rendering.setShowPaintRects_Parameters): Promise<void> {
    return this._client.send<void>("Rendering.setShowPaintRects", params);
  }
  /** Requests that backend shows debug borders on layers */
  setShowDebugBorders(params: Rendering.setShowDebugBorders_Parameters): Promise<void> {
    return this._client.send<void>("Rendering.setShowDebugBorders", params);
  }
  /** Requests that backend shows the FPS counter */
  setShowFPSCounter(params: Rendering.setShowFPSCounter_Parameters): Promise<void> {
    return this._client.send<void>("Rendering.setShowFPSCounter", params);
  }
  /** Requests that backend shows scroll bottleneck rects */
  setShowScrollBottleneckRects(params: Rendering.setShowScrollBottleneckRects_Parameters): Promise<void> {
    return this._client.send<void>("Rendering.setShowScrollBottleneckRects", params);
  }
}
export namespace Rendering {
  export type setShowPaintRects_Parameters = {
    /** True for showing paint rectangles */
    result: boolean;
  };
  export type setShowDebugBorders_Parameters = {
    /** True for showing debug borders */
    show: boolean;
  };
  export type setShowFPSCounter_Parameters = {
    /** True for showing the FPS counter */
    show: boolean;
  };
  export type setShowScrollBottleneckRects_Parameters = {
    /** True for showing scroll bottleneck rects */
    show: boolean;
  };
}
/** This domain emulates different environments for the page. */
export class Emulation {
  private _viewportChanged: Emulation.viewportChanged_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Overrides the values of device screen dimensions (window.screen.width, window.screen.height, window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media query results). */
  setDeviceMetricsOverride(params: Emulation.setDeviceMetricsOverride_Parameters): Promise<void> {
    return this._client.send<void>("Emulation.setDeviceMetricsOverride", params);
  }
  /** Clears the overriden device metrics. */
  clearDeviceMetricsOverride(): Promise<void> {
    return this._client.send<void>("Emulation.clearDeviceMetricsOverride");
  }
  /** Requests that scroll offsets and page scale factor are reset to initial values. */
  resetScrollAndPageScaleFactor(): Promise<void> {
    return this._client.send<void>("Emulation.resetScrollAndPageScaleFactor");
  }
  /** Sets a specified page scale factor. */
  setPageScaleFactor(params: Emulation.setPageScaleFactor_Parameters): Promise<void> {
    return this._client.send<void>("Emulation.setPageScaleFactor", params);
  }
  /** Switches script execution in the page. */
  setScriptExecutionDisabled(params: Emulation.setScriptExecutionDisabled_Parameters): Promise<void> {
    return this._client.send<void>("Emulation.setScriptExecutionDisabled", params);
  }
  /** Overrides the Geolocation Position or Error. Omitting any of the parameters emulates position unavailable. */
  setGeolocationOverride(params: Emulation.setGeolocationOverride_Parameters): Promise<void> {
    return this._client.send<void>("Emulation.setGeolocationOverride", params);
  }
  /** Clears the overriden Geolocation Position and Error. */
  clearGeolocationOverride(): Promise<void> {
    return this._client.send<void>("Emulation.clearGeolocationOverride");
  }
  /** Toggles mouse event-based touch event emulation. */
  setTouchEmulationEnabled(params: Emulation.setTouchEmulationEnabled_Parameters): Promise<void> {
    return this._client.send<void>("Emulation.setTouchEmulationEnabled", params);
  }
  /** Emulates the given media for CSS media queries. */
  setEmulatedMedia(params: Emulation.setEmulatedMedia_Parameters): Promise<void> {
    return this._client.send<void>("Emulation.setEmulatedMedia", params);
  }
  /** Enables CPU throttling to emulate slow CPUs. */
  setCPUThrottlingRate(params: Emulation.setCPUThrottlingRate_Parameters): Promise<void> {
    return this._client.send<void>("Emulation.setCPUThrottlingRate", params);
  }
  /** Tells whether emulation is supported. */
  canEmulate(): Promise<Emulation.canEmulate_Return> {
    return this._client.send<Emulation.canEmulate_Return>("Emulation.canEmulate");
  }
  /** Fired when a visible page viewport has changed. Only fired when device metrics are overridden. */
  get viewportChanged(): Emulation.viewportChanged_Handler {
    return this._viewportChanged;
  }
  set viewportChanged(handler: Emulation.viewportChanged_Handler) {
    if (this._viewportChanged) {
      this._client.removeListener("Emulation.viewportChanged", this._viewportChanged);
    }
    this._viewportChanged = handler;
    if (handler) {
      this._client.on("Emulation.viewportChanged", handler);
    }
  }
}
export namespace Emulation {
  /** Visible page viewport */
  export interface Viewport {
    /** X scroll offset in CSS pixels. */
    scrollX: number;
    /** Y scroll offset in CSS pixels. */
    scrollY: number;
    /** Contents width in CSS pixels. */
    contentsWidth: number;
    /** Contents height in CSS pixels. */
    contentsHeight: number;
    /** Page scale factor. */
    pageScaleFactor: number;
    /** Minimum page scale factor. */
    minimumPageScaleFactor: number;
    /** Maximum page scale factor. */
    maximumPageScaleFactor: number;
  }
  export type viewportChanged_Parameters = {
    /** Viewport description. */
    viewport: Viewport;
  };
  export type viewportChanged_Handler = (params: viewportChanged_Parameters) => void;
  export type setDeviceMetricsOverride_Parameters = {
    /** Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override. */
    width: number;
    /** Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override. */
    height: number;
    /** Overriding device scale factor value. 0 disables the override. */
    deviceScaleFactor: number;
    /** Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text autosizing and more. */
    mobile: boolean;
    /** Whether a view that exceeds the available browser window area should be scaled down to fit. */
    fitWindow: boolean;
    /** Scale to apply to resulting view image. Ignored in |fitWindow| mode. */
    scale?: number;
    /** X offset to shift resulting view image by. Ignored in |fitWindow| mode. */
    offsetX?: number;
    /** Y offset to shift resulting view image by. Ignored in |fitWindow| mode. */
    offsetY?: number;
    /** Overriding screen width value in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|. */
    screenWidth?: number;
    /** Overriding screen height value in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|. */
    screenHeight?: number;
    /** Overriding view X position on screen in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|. */
    positionX?: number;
    /** Overriding view Y position on screen in pixels (minimum 0, maximum 10000000). Only used for |mobile==true|. */
    positionY?: number;
  };
  export type setPageScaleFactor_Parameters = {
    /** Page scale factor. */
    pageScaleFactor: number;
  };
  export type setScriptExecutionDisabled_Parameters = {
    /** Whether script execution should be disabled in the page. */
    value: boolean;
  };
  export type setGeolocationOverride_Parameters = {
    /** Mock latitude */
    latitude?: number;
    /** Mock longitude */
    longitude?: number;
    /** Mock accuracy */
    accuracy?: number;
  };
  export type setTouchEmulationEnabled_Parameters = {
    /** Whether the touch event emulation should be enabled. */
    enabled: boolean;
    /** Touch/gesture events configuration. Default: current platform. */
    configuration?: "mobile" | "desktop";
  };
  export type setEmulatedMedia_Parameters = {
    /** Media type to emulate. Empty string disables the override. */
    media: string;
  };
  export type setCPUThrottlingRate_Parameters = {
    /** Throttling rate as a slowdown factor (1 is no throttle, 2 is 2x slowdown, etc). */
    rate: number;
  };
  export type canEmulate_Return = {
    /** True if emulation is supported. */
    result: boolean;
  };
}
/** Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects. Evaluation results are returned as mirror object that expose object type, string representation and unique identifier that can be used for further object reference. Original objects are maintained in memory unless they are either explicitly released or are released along with the other objects in their object group. */
export class Runtime {
  private _executionContextCreated: Runtime.executionContextCreated_Handler = undefined;
  private _executionContextDestroyed: Runtime.executionContextDestroyed_Handler = undefined;
  private _executionContextsCleared: Runtime.executionContextsCleared_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Evaluates expression on global object. */
  evaluate(params: Runtime.evaluate_Parameters): Promise<Runtime.evaluate_Return> {
    return this._client.send<Runtime.evaluate_Return>("Runtime.evaluate", params);
  }
  /** Calls function with given declaration on the given object. Object group of the result is inherited from the target object. */
  callFunctionOn(params: Runtime.callFunctionOn_Parameters): Promise<Runtime.callFunctionOn_Return> {
    return this._client.send<Runtime.callFunctionOn_Return>("Runtime.callFunctionOn", params);
  }
  /** Returns properties of a given object. Object group of the result is inherited from the target object. */
  getProperties(params: Runtime.getProperties_Parameters): Promise<Runtime.getProperties_Return> {
    return this._client.send<Runtime.getProperties_Return>("Runtime.getProperties", params);
  }
  /** Releases remote object with given id. */
  releaseObject(params: Runtime.releaseObject_Parameters): Promise<void> {
    return this._client.send<void>("Runtime.releaseObject", params);
  }
  /** Releases all remote objects that belong to a given group. */
  releaseObjectGroup(params: Runtime.releaseObjectGroup_Parameters): Promise<void> {
    return this._client.send<void>("Runtime.releaseObjectGroup", params);
  }
  /** Tells inspected instance(worker or page) that it can run in case it was started paused. */
  run(): Promise<void> {
    return this._client.send<void>("Runtime.run");
  }
  /** Enables reporting of execution contexts creation by means of <code>executionContextCreated</code> event. When the reporting gets enabled the event will be sent immediately for each existing execution context. */
  enable(): Promise<void> {
    return this._client.send<void>("Runtime.enable");
  }
  /** Disables reporting of execution contexts creation. */
  disable(): Promise<void> {
    return this._client.send<void>("Runtime.disable");
  }
  isRunRequired(): Promise<Runtime.isRunRequired_Return> {
    return this._client.send<Runtime.isRunRequired_Return>("Runtime.isRunRequired");
  }
  setCustomObjectFormatterEnabled(params: Runtime.setCustomObjectFormatterEnabled_Parameters): Promise<void> {
    return this._client.send<void>("Runtime.setCustomObjectFormatterEnabled", params);
  }
  /** Issued when new execution context is created. */
  get executionContextCreated(): Runtime.executionContextCreated_Handler {
    return this._executionContextCreated;
  }
  set executionContextCreated(handler: Runtime.executionContextCreated_Handler) {
    if (this._executionContextCreated) {
      this._client.removeListener("Runtime.executionContextCreated", this._executionContextCreated);
    }
    this._executionContextCreated = handler;
    if (handler) {
      this._client.on("Runtime.executionContextCreated", handler);
    }
  }
  /** Issued when execution context is destroyed. */
  get executionContextDestroyed(): Runtime.executionContextDestroyed_Handler {
    return this._executionContextDestroyed;
  }
  set executionContextDestroyed(handler: Runtime.executionContextDestroyed_Handler) {
    if (this._executionContextDestroyed) {
      this._client.removeListener("Runtime.executionContextDestroyed", this._executionContextDestroyed);
    }
    this._executionContextDestroyed = handler;
    if (handler) {
      this._client.on("Runtime.executionContextDestroyed", handler);
    }
  }
  /** Issued when all executionContexts were cleared in browser */
  get executionContextsCleared(): Runtime.executionContextsCleared_Handler {
    return this._executionContextsCleared;
  }
  set executionContextsCleared(handler: Runtime.executionContextsCleared_Handler) {
    if (this._executionContextsCleared) {
      this._client.removeListener("Runtime.executionContextsCleared", this._executionContextsCleared);
    }
    this._executionContextsCleared = handler;
    if (handler) {
      this._client.on("Runtime.executionContextsCleared", handler);
    }
  }
}
export namespace Runtime {
  /** Unique object identifier. */
  export type RemoteObjectId = string;
  /** Mirror object referencing original JavaScript object. */
  export interface RemoteObject {
    /** Object type. */
    type: "object" | "function" | "undefined" | "string" | "number" | "boolean" | "symbol";
    /** Object subtype hint. Specified for <code>object</code> type values only. */
    subtype?: "array" | "null" | "node" | "regexp" | "date" | "map" | "set" | "iterator" | "generator" | "error";
    /** Object class (constructor) name. Specified for <code>object</code> type values only. */
    className?: string;
    /** Remote object value in case of primitive values or JSON values (if it was requested), or description string if the value can not be JSON-stringified (like NaN, Infinity, -Infinity, -0). */
    value?: any;
    /** String representation of the object. */
    description?: string;
    /** Unique object identifier (for non-primitive values). */
    objectId?: RemoteObjectId;
    /** Preview containing abbreviated property values. Specified for <code>object</code> type values only. */
    preview?: ObjectPreview;
    customPreview?: CustomPreview;
  }
  export interface CustomPreview {
    header: string;
    hasBody: boolean;
    formatterObjectId: RemoteObjectId;
    configObjectId?: RemoteObjectId;
  }
  /** Object containing abbreviated remote object value. */
  export interface ObjectPreview {
    /** Object type. */
    type: "object" | "function" | "undefined" | "string" | "number" | "boolean" | "symbol";
    /** Object subtype hint. Specified for <code>object</code> type values only. */
    subtype?: "array" | "null" | "node" | "regexp" | "date" | "map" | "set" | "iterator" | "generator" | "error";
    /** String representation of the object. */
    description?: string;
    /** Determines whether preview is lossless (contains all information of the original object). */
    lossless: boolean;
    /** True iff some of the properties or entries of the original object did not fit. */
    overflow: boolean;
    /** List of the properties. */
    properties: PropertyPreview[];
    /** List of the entries. Specified for <code>map</code> and <code>set</code> subtype values only. */
    entries?: EntryPreview[];
  }
  export interface PropertyPreview {
    /** Property name. */
    name: string;
    /** Object type. Accessor means that the property itself is an accessor property. */
    type: "object" | "function" | "undefined" | "string" | "number" | "boolean" | "symbol" | "accessor";
    /** User-friendly property value string. */
    value?: string;
    /** Nested value preview. */
    valuePreview?: ObjectPreview;
    /** Object subtype hint. Specified for <code>object</code> type values only. */
    subtype?: "array" | "null" | "node" | "regexp" | "date" | "map" | "set" | "iterator" | "generator" | "error";
  }
  export interface EntryPreview {
    /** Preview of the key. Specified for map-like collection entries. */
    key?: ObjectPreview;
    /** Preview of the value. */
    value: ObjectPreview;
  }
  /** Object property descriptor. */
  export interface PropertyDescriptor {
    /** Property name or symbol description. */
    name: string;
    /** The value associated with the property. */
    value?: RemoteObject;
    /** True if the value associated with the property may be changed (data descriptors only). */
    writable?: boolean;
    /** A function which serves as a getter for the property, or <code>undefined</code> if there is no getter (accessor descriptors only). */
    get?: RemoteObject;
    /** A function which serves as a setter for the property, or <code>undefined</code> if there is no setter (accessor descriptors only). */
    set?: RemoteObject;
    /** True if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object. */
    configurable: boolean;
    /** True if this property shows up during enumeration of the properties on the corresponding object. */
    enumerable: boolean;
    /** True if the result was thrown during the evaluation. */
    wasThrown?: boolean;
    /** True if the property is owned for the object. */
    isOwn?: boolean;
    /** Property symbol object, if the property is of the <code>symbol</code> type. */
    symbol?: RemoteObject;
  }
  /** Object internal property descriptor. This property isn't normally visible in JavaScript code. */
  export interface InternalPropertyDescriptor {
    /** Conventional property name. */
    name: string;
    /** The value associated with the property. */
    value?: RemoteObject;
  }
  /** Represents function call argument. Either remote object id <code>objectId</code> or primitive <code>value</code> or neither of (for undefined) them should be specified. */
  export interface CallArgument {
    /** Primitive value, or description string if the value can not be JSON-stringified (like NaN, Infinity, -Infinity, -0). */
    value?: any;
    /** Remote object handle. */
    objectId?: RemoteObjectId;
    /** Object type. */
    type?: "object" | "function" | "undefined" | "string" | "number" | "boolean" | "symbol";
  }
  /** Id of an execution context. */
  export type ExecutionContextId = number;
  /** Description of an isolated world. */
  export interface ExecutionContextDescription {
    /** Unique id of the execution context. It can be used to specify in which execution context script evaluation should be performed. */
    id: ExecutionContextId;
    /** Context type. It is used e.g. to distinguish content scripts from web page script. */
    type?: string;
    /** Execution context origin. */
    origin: string;
    /** Human readable name describing given context. */
    name: string;
    /** Id of the owning frame. May be an empty string if the context is not associated with a frame. */
    frameId: string;
  }
  export type executionContextCreated_Parameters = {
    /** A newly created execution contex. */
    context: ExecutionContextDescription;
  };
  export type executionContextCreated_Handler = (params: executionContextCreated_Parameters) => void;
  export type executionContextDestroyed_Parameters = {
    /** Id of the destroyed context */
    executionContextId: ExecutionContextId;
  };
  export type executionContextDestroyed_Handler = (params: executionContextDestroyed_Parameters) => void;
  export type executionContextsCleared_Handler = () => void;
  export type evaluate_Parameters = {
    /** Expression to evaluate. */
    expression: string;
    /** Symbolic group name that can be used to release multiple objects. */
    objectGroup?: string;
    /** Determines whether Command Line API should be available during the evaluation. */
    includeCommandLineAPI?: boolean;
    /** Specifies whether evaluation should stop on exceptions and mute console. Overrides setPauseOnException state. */
    doNotPauseOnExceptionsAndMuteConsole?: boolean;
    /** Specifies in which isolated context to perform evaluation. Each content script lives in an isolated context and this parameter may be used to specify one of those contexts. If the parameter is omitted or 0 the evaluation will be performed in the context of the inspected page. */
    contextId?: ExecutionContextId;
    /** Whether the result is expected to be a JSON object that should be sent by value. */
    returnByValue?: boolean;
    /** Whether preview should be generated for the result. */
    generatePreview?: boolean;
  };
  export type evaluate_Return = {
    /** Evaluation result. */
    result: RemoteObject;
    /** True if the result was thrown during the evaluation. */
    wasThrown?: boolean;
    /** Exception details. */
    exceptionDetails?: Debugger.ExceptionDetails;
  };
  export type callFunctionOn_Parameters = {
    /** Identifier of the object to call function on. */
    objectId: RemoteObjectId;
    /** Declaration of the function to call. */
    functionDeclaration: string;
    /** Call arguments. All call arguments must belong to the same JavaScript world as the target object. */
    arguments?: CallArgument[];
    /** Specifies whether function call should stop on exceptions and mute console. Overrides setPauseOnException state. */
    doNotPauseOnExceptionsAndMuteConsole?: boolean;
    /** Whether the result is expected to be a JSON object which should be sent by value. */
    returnByValue?: boolean;
    /** Whether preview should be generated for the result. */
    generatePreview?: boolean;
  };
  export type callFunctionOn_Return = {
    /** Call result. */
    result: RemoteObject;
    /** True if the result was thrown during the evaluation. */
    wasThrown?: boolean;
  };
  export type getProperties_Parameters = {
    /** Identifier of the object to return properties for. */
    objectId: RemoteObjectId;
    /** If true, returns properties belonging only to the element itself, not to its prototype chain. */
    ownProperties?: boolean;
    /** If true, returns accessor properties (with getter/setter) only; internal properties are not returned either. */
    accessorPropertiesOnly?: boolean;
    /** Whether preview should be generated for the results. */
    generatePreview?: boolean;
  };
  export type getProperties_Return = {
    /** Object properties. */
    result: PropertyDescriptor[];
    /** Internal object properties (only of the element itself). */
    internalProperties?: InternalPropertyDescriptor[];
    /** Exception details. */
    exceptionDetails?: Debugger.ExceptionDetails;
  };
  export type releaseObject_Parameters = {
    /** Identifier of the object to release. */
    objectId: RemoteObjectId;
  };
  export type releaseObjectGroup_Parameters = {
    /** Symbolic object group name. */
    objectGroup: string;
  };
  export type isRunRequired_Return = {
    /** True if the Runtime is in paused on start state. */
    result: boolean;
  };
  export type setCustomObjectFormatterEnabled_Parameters = {
    enabled: boolean;
  };
}
/** Console domain defines methods and events for interaction with the JavaScript console. Console collects messages created by means of the <a href='http://getfirebug.com/wiki/index.php/Console_API'>JavaScript Console API</a>. One needs to enable this domain using <code>enable</code> command in order to start receiving the console messages. Browser collects messages issued while console domain is not enabled as well and reports them using <code>messageAdded</code> notification upon enabling. */
export class Console {
  private _messageAdded: Console.messageAdded_Handler = undefined;
  private _messageRepeatCountUpdated: Console.messageRepeatCountUpdated_Handler = undefined;
  private _messagesCleared: Console.messagesCleared_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables console domain, sends the messages collected so far to the client by means of the <code>messageAdded</code> notification. */
  enable(): Promise<void> {
    return this._client.send<void>("Console.enable");
  }
  /** Disables console domain, prevents further console messages from being reported to the client. */
  disable(): Promise<void> {
    return this._client.send<void>("Console.disable");
  }
  /** Clears console messages collected in the browser. */
  clearMessages(): Promise<void> {
    return this._client.send<void>("Console.clearMessages");
  }
  /** Issued when new console message is added. */
  get messageAdded(): Console.messageAdded_Handler {
    return this._messageAdded;
  }
  set messageAdded(handler: Console.messageAdded_Handler) {
    if (this._messageAdded) {
      this._client.removeListener("Console.messageAdded", this._messageAdded);
    }
    this._messageAdded = handler;
    if (handler) {
      this._client.on("Console.messageAdded", handler);
    }
  }
  /** Is not issued. Will be gone in the future versions of the protocol. */
  get messageRepeatCountUpdated(): Console.messageRepeatCountUpdated_Handler {
    return this._messageRepeatCountUpdated;
  }
  set messageRepeatCountUpdated(handler: Console.messageRepeatCountUpdated_Handler) {
    if (this._messageRepeatCountUpdated) {
      this._client.removeListener("Console.messageRepeatCountUpdated", this._messageRepeatCountUpdated);
    }
    this._messageRepeatCountUpdated = handler;
    if (handler) {
      this._client.on("Console.messageRepeatCountUpdated", handler);
    }
  }
  /** Issued when console is cleared. This happens either upon <code>clearMessages</code> command or after page navigation. */
  get messagesCleared(): Console.messagesCleared_Handler {
    return this._messagesCleared;
  }
  set messagesCleared(handler: Console.messagesCleared_Handler) {
    if (this._messagesCleared) {
      this._client.removeListener("Console.messagesCleared", this._messagesCleared);
    }
    this._messagesCleared = handler;
    if (handler) {
      this._client.on("Console.messagesCleared", handler);
    }
  }
}
export namespace Console {
  /** Number of seconds since epoch. */
  export type Timestamp = number;
  /** Console message. */
  export interface ConsoleMessage {
    /** Message source. */
    source: "xml" | "javascript" | "network" | "console-api" | "storage" | "appcache" | "rendering" | "security" | "other" | "deprecation";
    /** Message severity. */
    level: "log" | "warning" | "error" | "debug" | "info" | "revokedError";
    /** Message text. */
    text: string;
    /** Console message type. */
    type?: "log" | "dir" | "dirxml" | "table" | "trace" | "clear" | "startGroup" | "startGroupCollapsed" | "endGroup" | "assert" | "profile" | "profileEnd";
    /** Script ID of the message origin. */
    scriptId?: string;
    /** URL of the message origin. */
    url?: string;
    /** Line number in the resource that generated this message. */
    line?: number;
    /** Column number in the resource that generated this message. */
    column?: number;
    /** Repeat count for repeated messages. */
    repeatCount?: number;
    /** Message parameters in case of the formatted message. */
    parameters?: Runtime.RemoteObject[];
    /** JavaScript stack trace for assertions and error messages. */
    stackTrace?: StackTrace;
    /** Asynchronous JavaScript stack trace that preceded this message, if available. */
    asyncStackTrace?: AsyncStackTrace;
    /** Identifier of the network request associated with this message. */
    networkRequestId?: Network.RequestId;
    /** Timestamp, when this message was fired. */
    timestamp: Timestamp;
    /** Identifier of the context where this message was created */
    executionContextId?: Runtime.ExecutionContextId;
    /** Message id. */
    messageId?: number;
    /** Related message id. */
    relatedMessageId?: number;
  }
  /** Stack entry for console errors and assertions. */
  export interface CallFrame {
    /** JavaScript function name. */
    functionName: string;
    /** JavaScript script id. */
    scriptId: string;
    /** JavaScript script name or url. */
    url: string;
    /** JavaScript script line number. */
    lineNumber: number;
    /** JavaScript script column number. */
    columnNumber: number;
  }
  /** Call frames for assertions or error messages. */
  export type StackTrace = CallFrame[];
  /** Asynchronous JavaScript call stack. */
  export interface AsyncStackTrace {
    /** Call frames of the stack trace. */
    callFrames: CallFrame[];
    /** String label of this stack trace. For async traces this may be a name of the function that initiated the async call. */
    description?: string;
    /** Next asynchronous stack trace, if any. */
    asyncStackTrace?: AsyncStackTrace;
  }
  export type messageAdded_Parameters = {
    /** Console message that has been added. */
    message: ConsoleMessage;
  };
  export type messageAdded_Handler = (params: messageAdded_Parameters) => void;
  export type messageRepeatCountUpdated_Parameters = {
    /** New repeat count value. */
    count: number;
    /** Timestamp of most recent message in batch. */
    timestamp: Timestamp;
  };
  export type messageRepeatCountUpdated_Handler = (params: messageRepeatCountUpdated_Parameters) => void;
  export type messagesCleared_Handler = () => void;
}
/** Security */
export class Security {
  private _securityStateChanged: Security.securityStateChanged_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables tracking security state changes. */
  enable(): Promise<void> {
    return this._client.send<void>("Security.enable");
  }
  /** Disables tracking security state changes. */
  disable(): Promise<void> {
    return this._client.send<void>("Security.disable");
  }
  /** The security state of the page changed. */
  get securityStateChanged(): Security.securityStateChanged_Handler {
    return this._securityStateChanged;
  }
  set securityStateChanged(handler: Security.securityStateChanged_Handler) {
    if (this._securityStateChanged) {
      this._client.removeListener("Security.securityStateChanged", this._securityStateChanged);
    }
    this._securityStateChanged = handler;
    if (handler) {
      this._client.on("Security.securityStateChanged", handler);
    }
  }
}
export namespace Security {
  /** The security level of a page or resource. */
  export type SecurityState = "unknown" | "neutral" | "insecure" | "warning" | "secure" | "info";
  /** An explanation of an factor contributing to the security state. */
  export interface SecurityStateExplanation {
    /** Security state representing the severity of the factor being explained. */
    securityState: SecurityState;
    /** Short phrase describing the type of factor. */
    summary: string;
    /** Full text explanation of the factor. */
    description: string;
    /** Associated certificate id. */
    certificateId?: Network.CertificateId;
  }
  /** Information about mixed content on the page. */
  export interface MixedContentStatus {
    /** True if the page ran insecure content such as scripts. */
    ranInsecureContent: boolean;
    /** True if the page displayed insecure content such as images. */
    displayedInsecureContent: boolean;
    /** Security state representing a page that ran insecure content. */
    ranInsecureContentStyle: SecurityState;
    /** Security state representing a page that displayed insecure content. */
    displayedInsecureContentStyle: SecurityState;
  }
  export type securityStateChanged_Parameters = {
    /** Security state. */
    securityState: SecurityState;
    /** List of explanations for the security state. If the overall security state is `insecure` or `warning`, at least one corresponding explanation should be included. */
    explanations?: SecurityStateExplanation[];
    /** Information about mixed content on the page. */
    mixedContentStatus?: MixedContentStatus;
    /** True if the page was loaded over cryptographic transport such as HTTPS. */
    schemeIsCryptographic?: boolean;
  };
  export type securityStateChanged_Handler = (params: securityStateChanged_Parameters) => void;
}
/** Network domain allows tracking network activities of the page. It exposes information about http, file, data and other requests and responses, their headers, bodies, timing, etc. */
export class Network {
  private _requestWillBeSent: Network.requestWillBeSent_Handler = undefined;
  private _requestServedFromCache: Network.requestServedFromCache_Handler = undefined;
  private _responseReceived: Network.responseReceived_Handler = undefined;
  private _dataReceived: Network.dataReceived_Handler = undefined;
  private _loadingFinished: Network.loadingFinished_Handler = undefined;
  private _loadingFailed: Network.loadingFailed_Handler = undefined;
  private _webSocketWillSendHandshakeRequest: Network.webSocketWillSendHandshakeRequest_Handler = undefined;
  private _webSocketHandshakeResponseReceived: Network.webSocketHandshakeResponseReceived_Handler = undefined;
  private _webSocketCreated: Network.webSocketCreated_Handler = undefined;
  private _webSocketClosed: Network.webSocketClosed_Handler = undefined;
  private _webSocketFrameReceived: Network.webSocketFrameReceived_Handler = undefined;
  private _webSocketFrameError: Network.webSocketFrameError_Handler = undefined;
  private _webSocketFrameSent: Network.webSocketFrameSent_Handler = undefined;
  private _eventSourceMessageReceived: Network.eventSourceMessageReceived_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables network tracking, network events will now be delivered to the client. */
  enable(): Promise<void> {
    return this._client.send<void>("Network.enable");
  }
  /** Disables network tracking, prevents network events from being sent to the client. */
  disable(): Promise<void> {
    return this._client.send<void>("Network.disable");
  }
  /** Allows overriding user agent with the given string. */
  setUserAgentOverride(params: Network.setUserAgentOverride_Parameters): Promise<void> {
    return this._client.send<void>("Network.setUserAgentOverride", params);
  }
  /** Specifies whether to always send extra HTTP headers with the requests from this page. */
  setExtraHTTPHeaders(params: Network.setExtraHTTPHeaders_Parameters): Promise<void> {
    return this._client.send<void>("Network.setExtraHTTPHeaders", params);
  }
  /** Returns content served for the given request. */
  getResponseBody(params: Network.getResponseBody_Parameters): Promise<Network.getResponseBody_Return> {
    return this._client.send<Network.getResponseBody_Return>("Network.getResponseBody", params);
  }
  /** Blocks specific URL from loading. */
  addBlockedURL(params: Network.addBlockedURL_Parameters): Promise<void> {
    return this._client.send<void>("Network.addBlockedURL", params);
  }
  /** Cancels blocking of a specific URL from loading. */
  removeBlockedURL(params: Network.removeBlockedURL_Parameters): Promise<void> {
    return this._client.send<void>("Network.removeBlockedURL", params);
  }
  /** This method sends a new XMLHttpRequest which is identical to the original one. The following parameters should be identical: method, url, async, request body, extra headers, withCredentials attribute, user, password. */
  replayXHR(params: Network.replayXHR_Parameters): Promise<void> {
    return this._client.send<void>("Network.replayXHR", params);
  }
  /** Toggles monitoring of XMLHttpRequest. If <code>true</code>, console will receive messages upon each XHR issued. */
  setMonitoringXHREnabled(params: Network.setMonitoringXHREnabled_Parameters): Promise<void> {
    return this._client.send<void>("Network.setMonitoringXHREnabled", params);
  }
  /** Tells whether clearing browser cache is supported. */
  canClearBrowserCache(): Promise<Network.canClearBrowserCache_Return> {
    return this._client.send<Network.canClearBrowserCache_Return>("Network.canClearBrowserCache");
  }
  /** Clears browser cache. */
  clearBrowserCache(): Promise<void> {
    return this._client.send<void>("Network.clearBrowserCache");
  }
  /** Tells whether clearing browser cookies is supported. */
  canClearBrowserCookies(): Promise<Network.canClearBrowserCookies_Return> {
    return this._client.send<Network.canClearBrowserCookies_Return>("Network.canClearBrowserCookies");
  }
  /** Clears browser cookies. */
  clearBrowserCookies(): Promise<void> {
    return this._client.send<void>("Network.clearBrowserCookies");
  }
  /** Returns all browser cookies. Depending on the backend support, will return detailed cookie information in the <code>cookies</code> field. */
  getCookies(): Promise<Network.getCookies_Return> {
    return this._client.send<Network.getCookies_Return>("Network.getCookies");
  }
  /** Deletes browser cookie with given name, domain and path. */
  deleteCookie(params: Network.deleteCookie_Parameters): Promise<void> {
    return this._client.send<void>("Network.deleteCookie", params);
  }
  /** Tells whether emulation of network conditions is supported. */
  canEmulateNetworkConditions(): Promise<Network.canEmulateNetworkConditions_Return> {
    return this._client.send<Network.canEmulateNetworkConditions_Return>("Network.canEmulateNetworkConditions");
  }
  /** Activates emulation of network conditions. */
  emulateNetworkConditions(params: Network.emulateNetworkConditions_Parameters): Promise<void> {
    return this._client.send<void>("Network.emulateNetworkConditions", params);
  }
  /** Toggles ignoring cache for each request. If <code>true</code>, cache will not be used. */
  setCacheDisabled(params: Network.setCacheDisabled_Parameters): Promise<void> {
    return this._client.send<void>("Network.setCacheDisabled", params);
  }
  /** For testing. */
  setDataSizeLimitsForTest(params: Network.setDataSizeLimitsForTest_Parameters): Promise<void> {
    return this._client.send<void>("Network.setDataSizeLimitsForTest", params);
  }
  /** Returns details for the given certificate. */
  getCertificateDetails(params: Network.getCertificateDetails_Parameters): Promise<Network.getCertificateDetails_Return> {
    return this._client.send<Network.getCertificateDetails_Return>("Network.getCertificateDetails", params);
  }
  /** Displays native dialog with the certificate details. */
  showCertificateViewer(params: Network.showCertificateViewer_Parameters): Promise<void> {
    return this._client.send<void>("Network.showCertificateViewer", params);
  }
  /** Fired when page is about to send HTTP request. */
  get requestWillBeSent(): Network.requestWillBeSent_Handler {
    return this._requestWillBeSent;
  }
  set requestWillBeSent(handler: Network.requestWillBeSent_Handler) {
    if (this._requestWillBeSent) {
      this._client.removeListener("Network.requestWillBeSent", this._requestWillBeSent);
    }
    this._requestWillBeSent = handler;
    if (handler) {
      this._client.on("Network.requestWillBeSent", handler);
    }
  }
  /** Fired if request ended up loading from cache. */
  get requestServedFromCache(): Network.requestServedFromCache_Handler {
    return this._requestServedFromCache;
  }
  set requestServedFromCache(handler: Network.requestServedFromCache_Handler) {
    if (this._requestServedFromCache) {
      this._client.removeListener("Network.requestServedFromCache", this._requestServedFromCache);
    }
    this._requestServedFromCache = handler;
    if (handler) {
      this._client.on("Network.requestServedFromCache", handler);
    }
  }
  /** Fired when HTTP response is available. */
  get responseReceived(): Network.responseReceived_Handler {
    return this._responseReceived;
  }
  set responseReceived(handler: Network.responseReceived_Handler) {
    if (this._responseReceived) {
      this._client.removeListener("Network.responseReceived", this._responseReceived);
    }
    this._responseReceived = handler;
    if (handler) {
      this._client.on("Network.responseReceived", handler);
    }
  }
  /** Fired when data chunk was received over the network. */
  get dataReceived(): Network.dataReceived_Handler {
    return this._dataReceived;
  }
  set dataReceived(handler: Network.dataReceived_Handler) {
    if (this._dataReceived) {
      this._client.removeListener("Network.dataReceived", this._dataReceived);
    }
    this._dataReceived = handler;
    if (handler) {
      this._client.on("Network.dataReceived", handler);
    }
  }
  /** Fired when HTTP request has finished loading. */
  get loadingFinished(): Network.loadingFinished_Handler {
    return this._loadingFinished;
  }
  set loadingFinished(handler: Network.loadingFinished_Handler) {
    if (this._loadingFinished) {
      this._client.removeListener("Network.loadingFinished", this._loadingFinished);
    }
    this._loadingFinished = handler;
    if (handler) {
      this._client.on("Network.loadingFinished", handler);
    }
  }
  /** Fired when HTTP request has failed to load. */
  get loadingFailed(): Network.loadingFailed_Handler {
    return this._loadingFailed;
  }
  set loadingFailed(handler: Network.loadingFailed_Handler) {
    if (this._loadingFailed) {
      this._client.removeListener("Network.loadingFailed", this._loadingFailed);
    }
    this._loadingFailed = handler;
    if (handler) {
      this._client.on("Network.loadingFailed", handler);
    }
  }
  /** Fired when WebSocket is about to initiate handshake. */
  get webSocketWillSendHandshakeRequest(): Network.webSocketWillSendHandshakeRequest_Handler {
    return this._webSocketWillSendHandshakeRequest;
  }
  set webSocketWillSendHandshakeRequest(handler: Network.webSocketWillSendHandshakeRequest_Handler) {
    if (this._webSocketWillSendHandshakeRequest) {
      this._client.removeListener("Network.webSocketWillSendHandshakeRequest", this._webSocketWillSendHandshakeRequest);
    }
    this._webSocketWillSendHandshakeRequest = handler;
    if (handler) {
      this._client.on("Network.webSocketWillSendHandshakeRequest", handler);
    }
  }
  /** Fired when WebSocket handshake response becomes available. */
  get webSocketHandshakeResponseReceived(): Network.webSocketHandshakeResponseReceived_Handler {
    return this._webSocketHandshakeResponseReceived;
  }
  set webSocketHandshakeResponseReceived(handler: Network.webSocketHandshakeResponseReceived_Handler) {
    if (this._webSocketHandshakeResponseReceived) {
      this._client.removeListener("Network.webSocketHandshakeResponseReceived", this._webSocketHandshakeResponseReceived);
    }
    this._webSocketHandshakeResponseReceived = handler;
    if (handler) {
      this._client.on("Network.webSocketHandshakeResponseReceived", handler);
    }
  }
  /** Fired upon WebSocket creation. */
  get webSocketCreated(): Network.webSocketCreated_Handler {
    return this._webSocketCreated;
  }
  set webSocketCreated(handler: Network.webSocketCreated_Handler) {
    if (this._webSocketCreated) {
      this._client.removeListener("Network.webSocketCreated", this._webSocketCreated);
    }
    this._webSocketCreated = handler;
    if (handler) {
      this._client.on("Network.webSocketCreated", handler);
    }
  }
  /** Fired when WebSocket is closed. */
  get webSocketClosed(): Network.webSocketClosed_Handler {
    return this._webSocketClosed;
  }
  set webSocketClosed(handler: Network.webSocketClosed_Handler) {
    if (this._webSocketClosed) {
      this._client.removeListener("Network.webSocketClosed", this._webSocketClosed);
    }
    this._webSocketClosed = handler;
    if (handler) {
      this._client.on("Network.webSocketClosed", handler);
    }
  }
  /** Fired when WebSocket frame is received. */
  get webSocketFrameReceived(): Network.webSocketFrameReceived_Handler {
    return this._webSocketFrameReceived;
  }
  set webSocketFrameReceived(handler: Network.webSocketFrameReceived_Handler) {
    if (this._webSocketFrameReceived) {
      this._client.removeListener("Network.webSocketFrameReceived", this._webSocketFrameReceived);
    }
    this._webSocketFrameReceived = handler;
    if (handler) {
      this._client.on("Network.webSocketFrameReceived", handler);
    }
  }
  /** Fired when WebSocket frame error occurs. */
  get webSocketFrameError(): Network.webSocketFrameError_Handler {
    return this._webSocketFrameError;
  }
  set webSocketFrameError(handler: Network.webSocketFrameError_Handler) {
    if (this._webSocketFrameError) {
      this._client.removeListener("Network.webSocketFrameError", this._webSocketFrameError);
    }
    this._webSocketFrameError = handler;
    if (handler) {
      this._client.on("Network.webSocketFrameError", handler);
    }
  }
  /** Fired when WebSocket frame is sent. */
  get webSocketFrameSent(): Network.webSocketFrameSent_Handler {
    return this._webSocketFrameSent;
  }
  set webSocketFrameSent(handler: Network.webSocketFrameSent_Handler) {
    if (this._webSocketFrameSent) {
      this._client.removeListener("Network.webSocketFrameSent", this._webSocketFrameSent);
    }
    this._webSocketFrameSent = handler;
    if (handler) {
      this._client.on("Network.webSocketFrameSent", handler);
    }
  }
  /** Fired when EventSource message is received. */
  get eventSourceMessageReceived(): Network.eventSourceMessageReceived_Handler {
    return this._eventSourceMessageReceived;
  }
  set eventSourceMessageReceived(handler: Network.eventSourceMessageReceived_Handler) {
    if (this._eventSourceMessageReceived) {
      this._client.removeListener("Network.eventSourceMessageReceived", this._eventSourceMessageReceived);
    }
    this._eventSourceMessageReceived = handler;
    if (handler) {
      this._client.on("Network.eventSourceMessageReceived", handler);
    }
  }
}
export namespace Network {
  /** Unique loader identifier. */
  export type LoaderId = string;
  /** Unique request identifier. */
  export type RequestId = string;
  /** Number of seconds since epoch. */
  export type Timestamp = number;
  /** Request / response headers as keys / values of JSON object. */
  export type Headers = any;
  /** Timing information for the request. */
  export interface ResourceTiming {
    /** Timing's requestTime is a baseline in seconds, while the other numbers are ticks in milliseconds relatively to this requestTime. */
    requestTime: number;
    /** Started resolving proxy. */
    proxyStart: number;
    /** Finished resolving proxy. */
    proxyEnd: number;
    /** Started DNS address resolve. */
    dnsStart: number;
    /** Finished DNS address resolve. */
    dnsEnd: number;
    /** Started connecting to the remote host. */
    connectStart: number;
    /** Connected to the remote host. */
    connectEnd: number;
    /** Started SSL handshake. */
    sslStart: number;
    /** Finished SSL handshake. */
    sslEnd: number;
    /** Started running ServiceWorker. */
    workerStart: number;
    /** Finished Starting ServiceWorker. */
    workerReady: number;
    /** Started sending request. */
    sendStart: number;
    /** Finished sending request. */
    sendEnd: number;
    /** Finished receiving response headers. */
    receiveHeadersEnd: number;
  }
  /** Loading priority of a resource request. */
  export type ResourcePriority = "VeryLow" | "Low" | "Medium" | "High" | "VeryHigh";
  /** HTTP request data. */
  export interface Request {
    /** Request URL. */
    url: string;
    /** HTTP request method. */
    method: string;
    /** HTTP request headers. */
    headers: Headers;
    /** HTTP POST request data. */
    postData?: string;
    /** The mixed content status of the request, as defined in http://www.w3.org/TR/mixed-content/ */
    mixedContentType?: "blockable" | "optionally-blockable" | "none";
    /** Priority of the resource request at the time request is sent. */
    initialPriority: ResourcePriority;
  }
  /** An internal certificate ID value. */
  export type CertificateId = number;
  /** Subject of a certificate. */
  export interface CertificateSubject {
    /** Certificate subject name. */
    name: string;
    /** Subject Alternative Name (SAN) DNS names. */
    sanDnsNames: string[];
    /** Subject Alternative Name (SAN) IP addresses. */
    sanIpAddresses: string[];
  }
  /** Details about a request's certificate. */
  export interface CertificateDetails {
    /** Certificate subject. */
    subject: CertificateSubject;
    /** Name of the issuing CA. */
    issuer: string;
    /** Certificate valid from date. */
    validFrom: Timestamp;
    /** Certificate valid to (expiration) date */
    validTo: Timestamp;
  }
  /** Security details about a request. */
  export interface SecurityDetails {
    /** Protocol name (e.g. "TLS 1.2" or "QUIC"). */
    protocol: string;
    /** Key Exchange used by the connection. */
    keyExchange: string;
    /** Cipher name. */
    cipher: string;
    /** TLS MAC. Note that AEAD ciphers do not have separate MACs. */
    mac?: string;
    /** Certificate ID value. */
    certificateId: CertificateId;
  }
  /** The reason why request was blocked. */
  export type BlockedReason = "csp" | "mixed-content" | "origin" | "inspector" | "other";
  /** HTTP response data. */
  export interface Response {
    /** Response URL. This URL can be different from CachedResource.url in case of redirect. */
    url: string;
    /** HTTP response status code. */
    status: number;
    /** HTTP response status text. */
    statusText: string;
    /** HTTP response headers. */
    headers: Headers;
    /** HTTP response headers text. */
    headersText?: string;
    /** Resource mimeType as determined by the browser. */
    mimeType: string;
    /** Refined HTTP request headers that were actually transmitted over the network. */
    requestHeaders?: Headers;
    /** HTTP request headers text. */
    requestHeadersText?: string;
    /** Specifies whether physical connection was actually reused for this request. */
    connectionReused: boolean;
    /** Physical connection id that was actually used for this request. */
    connectionId: number;
    /** Remote IP address. */
    remoteIPAddress?: string;
    /** Remote port. */
    remotePort?: number;
    /** Specifies that the request was served from the disk cache. */
    fromDiskCache?: boolean;
    /** Specifies that the request was served from the ServiceWorker. */
    fromServiceWorker?: boolean;
    /** Total number of bytes received for this request so far. */
    encodedDataLength: number;
    /** Timing information for the given request. */
    timing?: ResourceTiming;
    /** Protocol used to fetch this request. */
    protocol?: string;
    /** Security state of the request resource. */
    securityState: Security.SecurityState;
    /** Security details for the request. */
    securityDetails?: SecurityDetails;
  }
  /** WebSocket request data. */
  export interface WebSocketRequest {
    /** HTTP request headers. */
    headers: Headers;
  }
  /** WebSocket response data. */
  export interface WebSocketResponse {
    /** HTTP response status code. */
    status: number;
    /** HTTP response status text. */
    statusText: string;
    /** HTTP response headers. */
    headers: Headers;
    /** HTTP response headers text. */
    headersText?: string;
    /** HTTP request headers. */
    requestHeaders?: Headers;
    /** HTTP request headers text. */
    requestHeadersText?: string;
  }
  /** WebSocket frame data. */
  export interface WebSocketFrame {
    /** WebSocket frame opcode. */
    opcode: number;
    /** WebSocke frame mask. */
    mask: boolean;
    /** WebSocke frame payload data. */
    payloadData: string;
  }
  /** Information about the cached resource. */
  export interface CachedResource {
    /** Resource URL. This is the url of the original network request. */
    url: string;
    /** Type of this resource. */
    type: Page.ResourceType;
    /** Cached response data. */
    response?: Response;
    /** Cached response body size. */
    bodySize: number;
  }
  /** Information about the request initiator. */
  export interface Initiator {
    /** Type of this initiator. */
    type: "parser" | "script" | "other";
    /** Initiator JavaScript stack trace, set for Script only. */
    stackTrace?: Console.StackTrace;
    /** Initiator URL, set for Parser type only. */
    url?: string;
    /** Initiator line number, set for Parser type only. */
    lineNumber?: number;
    /** Initiator asynchronous JavaScript stack trace, if available. */
    asyncStackTrace?: Console.AsyncStackTrace;
  }
  /** Cookie object */
  export interface Cookie {
    /** Cookie name. */
    name: string;
    /** Cookie value. */
    value: string;
    /** Cookie domain. */
    domain: string;
    /** Cookie path. */
    path: string;
    /** Cookie expires. */
    expires: number;
    /** Cookie size. */
    size: number;
    /** True if cookie is http-only. */
    httpOnly: boolean;
    /** True if cookie is secure. */
    secure: boolean;
    /** True in case of session cookie. */
    session: boolean;
  }
  export type requestWillBeSent_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
    /** Frame identifier. */
    frameId: Page.FrameId;
    /** Loader identifier. */
    loaderId: LoaderId;
    /** URL of the document this request is loaded for. */
    documentURL: string;
    /** Request data. */
    request: Request;
    /** Timestamp. */
    timestamp: Timestamp;
    /** UTC Timestamp. */
    wallTime: Timestamp;
    /** Request initiator. */
    initiator: Initiator;
    /** Redirect response data. */
    redirectResponse?: Response;
    /** Type of this resource. */
    type?: Page.ResourceType;
  };
  export type requestWillBeSent_Handler = (params: requestWillBeSent_Parameters) => void;
  export type requestServedFromCache_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
  };
  export type requestServedFromCache_Handler = (params: requestServedFromCache_Parameters) => void;
  export type responseReceived_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
    /** Frame identifier. */
    frameId: Page.FrameId;
    /** Loader identifier. */
    loaderId: LoaderId;
    /** Timestamp. */
    timestamp: Timestamp;
    /** Resource type. */
    type: Page.ResourceType;
    /** Response data. */
    response: Response;
  };
  export type responseReceived_Handler = (params: responseReceived_Parameters) => void;
  export type dataReceived_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
    /** Timestamp. */
    timestamp: Timestamp;
    /** Data chunk length. */
    dataLength: number;
    /** Actual bytes received (might be less than dataLength for compressed encodings). */
    encodedDataLength: number;
  };
  export type dataReceived_Handler = (params: dataReceived_Parameters) => void;
  export type loadingFinished_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
    /** Timestamp. */
    timestamp: Timestamp;
    /** Total number of bytes received for this request. */
    encodedDataLength: number;
  };
  export type loadingFinished_Handler = (params: loadingFinished_Parameters) => void;
  export type loadingFailed_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
    /** Timestamp. */
    timestamp: Timestamp;
    /** Resource type. */
    type: Page.ResourceType;
    /** User friendly error message. */
    errorText: string;
    /** True if loading was canceled. */
    canceled?: boolean;
    /** The reason why loading was blocked, if any. */
    blockedReason?: BlockedReason;
  };
  export type loadingFailed_Handler = (params: loadingFailed_Parameters) => void;
  export type webSocketWillSendHandshakeRequest_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
    /** Timestamp. */
    timestamp: Timestamp;
    /** UTC Timestamp. */
    wallTime: Timestamp;
    /** WebSocket request data. */
    request: WebSocketRequest;
  };
  export type webSocketWillSendHandshakeRequest_Handler = (params: webSocketWillSendHandshakeRequest_Parameters) => void;
  export type webSocketHandshakeResponseReceived_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
    /** Timestamp. */
    timestamp: Timestamp;
    /** WebSocket response data. */
    response: WebSocketResponse;
  };
  export type webSocketHandshakeResponseReceived_Handler = (params: webSocketHandshakeResponseReceived_Parameters) => void;
  export type webSocketCreated_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
    /** WebSocket request URL. */
    url: string;
  };
  export type webSocketCreated_Handler = (params: webSocketCreated_Parameters) => void;
  export type webSocketClosed_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
    /** Timestamp. */
    timestamp: Timestamp;
  };
  export type webSocketClosed_Handler = (params: webSocketClosed_Parameters) => void;
  export type webSocketFrameReceived_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
    /** Timestamp. */
    timestamp: Timestamp;
    /** WebSocket response data. */
    response: WebSocketFrame;
  };
  export type webSocketFrameReceived_Handler = (params: webSocketFrameReceived_Parameters) => void;
  export type webSocketFrameError_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
    /** Timestamp. */
    timestamp: Timestamp;
    /** WebSocket frame error message. */
    errorMessage: string;
  };
  export type webSocketFrameError_Handler = (params: webSocketFrameError_Parameters) => void;
  export type webSocketFrameSent_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
    /** Timestamp. */
    timestamp: Timestamp;
    /** WebSocket response data. */
    response: WebSocketFrame;
  };
  export type webSocketFrameSent_Handler = (params: webSocketFrameSent_Parameters) => void;
  export type eventSourceMessageReceived_Parameters = {
    /** Request identifier. */
    requestId: RequestId;
    /** Timestamp. */
    timestamp: Timestamp;
    /** Message type. */
    eventName: string;
    /** Message identifier. */
    eventId: string;
    /** Message content. */
    data: string;
  };
  export type eventSourceMessageReceived_Handler = (params: eventSourceMessageReceived_Parameters) => void;
  export type setUserAgentOverride_Parameters = {
    /** User agent to use. */
    userAgent: string;
  };
  export type setExtraHTTPHeaders_Parameters = {
    /** Map with extra HTTP headers. */
    headers: Headers;
  };
  export type getResponseBody_Parameters = {
    /** Identifier of the network request to get content for. */
    requestId: RequestId;
  };
  export type getResponseBody_Return = {
    /** Response body. */
    body: string;
    /** True, if content was sent as base64. */
    base64Encoded: boolean;
  };
  export type addBlockedURL_Parameters = {
    /** URL to block. */
    url: string;
  };
  export type removeBlockedURL_Parameters = {
    /** URL to stop blocking. */
    url: string;
  };
  export type replayXHR_Parameters = {
    /** Identifier of XHR to replay. */
    requestId: RequestId;
  };
  export type setMonitoringXHREnabled_Parameters = {
    /** Monitoring enabled state. */
    enabled: boolean;
  };
  export type canClearBrowserCache_Return = {
    /** True if browser cache can be cleared. */
    result: boolean;
  };
  export type canClearBrowserCookies_Return = {
    /** True if browser cookies can be cleared. */
    result: boolean;
  };
  export type getCookies_Return = {
    /** Array of cookie objects. */
    cookies: Cookie[];
  };
  export type deleteCookie_Parameters = {
    /** Name of the cookie to remove. */
    cookieName: string;
    /** URL to match cooke domain and path. */
    url: string;
  };
  export type canEmulateNetworkConditions_Return = {
    /** True if emulation of network conditions is supported. */
    result: boolean;
  };
  export type emulateNetworkConditions_Parameters = {
    /** True to emulate internet disconnection. */
    offline: boolean;
    /** Additional latency (ms). */
    latency: number;
    /** Maximal aggregated download throughput. */
    downloadThroughput: number;
    /** Maximal aggregated upload throughput. */
    uploadThroughput: number;
  };
  export type setCacheDisabled_Parameters = {
    /** Cache disabled state. */
    cacheDisabled: boolean;
  };
  export type setDataSizeLimitsForTest_Parameters = {
    /** Maximum total buffer size. */
    maxTotalSize: number;
    /** Maximum per-resource size. */
    maxResourceSize: number;
  };
  export type getCertificateDetails_Parameters = {
    /** ID of the certificate to get details for. */
    certificateId: CertificateId;
  };
  export type getCertificateDetails_Return = {
    /** Certificate details. */
    result: CertificateDetails;
  };
  export type showCertificateViewer_Parameters = {
    /** Certificate id. */
    certificateId: CertificateId;
  };
}
export class Database {
  private _addDatabase: Database.addDatabase_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables database tracking, database events will now be delivered to the client. */
  enable(): Promise<void> {
    return this._client.send<void>("Database.enable");
  }
  /** Disables database tracking, prevents database events from being sent to the client. */
  disable(): Promise<void> {
    return this._client.send<void>("Database.disable");
  }
  getDatabaseTableNames(params: Database.getDatabaseTableNames_Parameters): Promise<Database.getDatabaseTableNames_Return> {
    return this._client.send<Database.getDatabaseTableNames_Return>("Database.getDatabaseTableNames", params);
  }
  executeSQL(params: Database.executeSQL_Parameters): Promise<Database.executeSQL_Return> {
    return this._client.send<Database.executeSQL_Return>("Database.executeSQL", params);
  }
  get addDatabase(): Database.addDatabase_Handler {
    return this._addDatabase;
  }
  set addDatabase(handler: Database.addDatabase_Handler) {
    if (this._addDatabase) {
      this._client.removeListener("Database.addDatabase", this._addDatabase);
    }
    this._addDatabase = handler;
    if (handler) {
      this._client.on("Database.addDatabase", handler);
    }
  }
}
export namespace Database {
  /** Unique identifier of Database object. */
  export type DatabaseId = string;
  /** Database object. */
  export interface Database {
    /** Database ID. */
    id: DatabaseId;
    /** Database domain. */
    domain: string;
    /** Database name. */
    name: string;
    /** Database version. */
    version: string;
  }
  /** Database error. */
  export interface Error {
    /** Error message. */
    message: string;
    /** Error code. */
    code: number;
  }
  export type addDatabase_Parameters = {
    database: Database;
  };
  export type addDatabase_Handler = (params: addDatabase_Parameters) => void;
  export type getDatabaseTableNames_Parameters = {
    databaseId: DatabaseId;
  };
  export type getDatabaseTableNames_Return = {
    tableNames: string[];
  };
  export type executeSQL_Parameters = {
    databaseId: DatabaseId;
    query: string;
  };
  export type executeSQL_Return = {
    columnNames?: string[];
    values?: any[];
    sqlError?: Error;
  };
}
export class IndexedDB {
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables events from backend. */
  enable(): Promise<void> {
    return this._client.send<void>("IndexedDB.enable");
  }
  /** Disables events from backend. */
  disable(): Promise<void> {
    return this._client.send<void>("IndexedDB.disable");
  }
  /** Requests database names for given security origin. */
  requestDatabaseNames(params: IndexedDB.requestDatabaseNames_Parameters): Promise<IndexedDB.requestDatabaseNames_Return> {
    return this._client.send<IndexedDB.requestDatabaseNames_Return>("IndexedDB.requestDatabaseNames", params);
  }
  /** Requests database with given name in given frame. */
  requestDatabase(params: IndexedDB.requestDatabase_Parameters): Promise<IndexedDB.requestDatabase_Return> {
    return this._client.send<IndexedDB.requestDatabase_Return>("IndexedDB.requestDatabase", params);
  }
  /** Requests data from object store or index. */
  requestData(params: IndexedDB.requestData_Parameters): Promise<IndexedDB.requestData_Return> {
    return this._client.send<IndexedDB.requestData_Return>("IndexedDB.requestData", params);
  }
  /** Clears all entries from an object store. */
  clearObjectStore(params: IndexedDB.clearObjectStore_Parameters): Promise<IndexedDB.clearObjectStore_Return> {
    return this._client.send<IndexedDB.clearObjectStore_Return>("IndexedDB.clearObjectStore", params);
  }
}
export namespace IndexedDB {
  /** Database with an array of object stores. */
  export interface DatabaseWithObjectStores {
    /** Database name. */
    name: string;
    /** Deprecated string database version. */
    version: string;
    /** Integer database version. */
    intVersion: number;
    /** Object stores in this database. */
    objectStores: ObjectStore[];
  }
  /** Object store. */
  export interface ObjectStore {
    /** Object store name. */
    name: string;
    /** Object store key path. */
    keyPath: KeyPath;
    /** If true, object store has auto increment flag set. */
    autoIncrement: boolean;
    /** Indexes in this object store. */
    indexes: ObjectStoreIndex[];
  }
  /** Object store index. */
  export interface ObjectStoreIndex {
    /** Index name. */
    name: string;
    /** Index key path. */
    keyPath: KeyPath;
    /** If true, index is unique. */
    unique: boolean;
    /** If true, index allows multiple entries for a key. */
    multiEntry: boolean;
  }
  /** Key. */
  export interface Key {
    /** Key type. */
    type: "number" | "string" | "date" | "array";
    /** Number value. */
    number?: number;
    /** String value. */
    string?: string;
    /** Date value. */
    date?: number;
    /** Array value. */
    array?: Key[];
  }
  /** Key range. */
  export interface KeyRange {
    /** Lower bound. */
    lower?: Key;
    /** Upper bound. */
    upper?: Key;
    /** If true lower bound is open. */
    lowerOpen: boolean;
    /** If true upper bound is open. */
    upperOpen: boolean;
  }
  /** Data entry. */
  export interface DataEntry {
    /** JSON-stringified key object. */
    key: string;
    /** JSON-stringified primary key object. */
    primaryKey: string;
    /** JSON-stringified value object. */
    value: string;
  }
  /** Key path. */
  export interface KeyPath {
    /** Key path type. */
    type: "null" | "string" | "array";
    /** String value. */
    string?: string;
    /** Array value. */
    array?: string[];
  }
  export type requestDatabaseNames_Parameters = {
    /** Security origin. */
    securityOrigin: string;
  };
  export type requestDatabaseNames_Return = {
    /** Database names for origin. */
    databaseNames: string[];
  };
  export type requestDatabase_Parameters = {
    /** Security origin. */
    securityOrigin: string;
    /** Database name. */
    databaseName: string;
  };
  export type requestDatabase_Return = {
    /** Database with an array of object stores. */
    databaseWithObjectStores: DatabaseWithObjectStores;
  };
  export type requestData_Parameters = {
    /** Security origin. */
    securityOrigin: string;
    /** Database name. */
    databaseName: string;
    /** Object store name. */
    objectStoreName: string;
    /** Index name, empty string for object store data requests. */
    indexName: string;
    /** Number of records to skip. */
    skipCount: number;
    /** Number of records to fetch. */
    pageSize: number;
    /** Key range. */
    keyRange?: KeyRange;
  };
  export type requestData_Return = {
    /** Array of object store data entries. */
    objectStoreDataEntries: DataEntry[];
    /** If true, there are more entries to fetch in the given range. */
    hasMore: boolean;
  };
  export type clearObjectStore_Parameters = {
    /** Security origin. */
    securityOrigin: string;
    /** Database name. */
    databaseName: string;
    /** Object store name. */
    objectStoreName: string;
  };
  export type clearObjectStore_Return = any;
}
export class CacheStorage {
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Requests cache names. */
  requestCacheNames(params: CacheStorage.requestCacheNames_Parameters): Promise<CacheStorage.requestCacheNames_Return> {
    return this._client.send<CacheStorage.requestCacheNames_Return>("CacheStorage.requestCacheNames", params);
  }
  /** Requests data from cache. */
  requestEntries(params: CacheStorage.requestEntries_Parameters): Promise<CacheStorage.requestEntries_Return> {
    return this._client.send<CacheStorage.requestEntries_Return>("CacheStorage.requestEntries", params);
  }
  /** Deletes a cache. */
  deleteCache(params: CacheStorage.deleteCache_Parameters): Promise<void> {
    return this._client.send<void>("CacheStorage.deleteCache", params);
  }
  /** Deletes a cache entry. */
  deleteEntry(params: CacheStorage.deleteEntry_Parameters): Promise<void> {
    return this._client.send<void>("CacheStorage.deleteEntry", params);
  }
}
export namespace CacheStorage {
  /** Unique identifier of the Cache object. */
  export type CacheId = string;
  /** Data entry. */
  export interface DataEntry {
    /** Request url spec. */
    request: string;
    /** Response stataus text. */
    response: string;
  }
  /** Cache identifier. */
  export interface Cache {
    /** An opaque unique id of the cache. */
    cacheId: CacheId;
    /** Security origin of the cache. */
    securityOrigin: string;
    /** The name of the cache. */
    cacheName: string;
  }
  export type requestCacheNames_Parameters = {
    /** Security origin. */
    securityOrigin: string;
  };
  export type requestCacheNames_Return = {
    /** Caches for the security origin. */
    caches: Cache[];
  };
  export type requestEntries_Parameters = {
    /** ID of cache to get entries from. */
    cacheId: CacheId;
    /** Number of records to skip. */
    skipCount: number;
    /** Number of records to fetch. */
    pageSize: number;
  };
  export type requestEntries_Return = {
    /** Array of object store data entries. */
    cacheDataEntries: DataEntry[];
    /** If true, there are more entries to fetch in the given range. */
    hasMore: boolean;
  };
  export type deleteCache_Parameters = {
    /** Id of cache for deletion. */
    cacheId: CacheId;
  };
  export type deleteEntry_Parameters = {
    /** Id of cache where the entry will be deleted. */
    cacheId: CacheId;
    /** URL spec of the request. */
    request: string;
  };
}
/** Query and modify DOM storage. */
export class DOMStorage {
  private _domStorageItemsCleared: DOMStorage.domStorageItemsCleared_Handler = undefined;
  private _domStorageItemRemoved: DOMStorage.domStorageItemRemoved_Handler = undefined;
  private _domStorageItemAdded: DOMStorage.domStorageItemAdded_Handler = undefined;
  private _domStorageItemUpdated: DOMStorage.domStorageItemUpdated_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables storage tracking, storage events will now be delivered to the client. */
  enable(): Promise<void> {
    return this._client.send<void>("DOMStorage.enable");
  }
  /** Disables storage tracking, prevents storage events from being sent to the client. */
  disable(): Promise<void> {
    return this._client.send<void>("DOMStorage.disable");
  }
  getDOMStorageItems(params: DOMStorage.getDOMStorageItems_Parameters): Promise<DOMStorage.getDOMStorageItems_Return> {
    return this._client.send<DOMStorage.getDOMStorageItems_Return>("DOMStorage.getDOMStorageItems", params);
  }
  setDOMStorageItem(params: DOMStorage.setDOMStorageItem_Parameters): Promise<void> {
    return this._client.send<void>("DOMStorage.setDOMStorageItem", params);
  }
  removeDOMStorageItem(params: DOMStorage.removeDOMStorageItem_Parameters): Promise<void> {
    return this._client.send<void>("DOMStorage.removeDOMStorageItem", params);
  }
  get domStorageItemsCleared(): DOMStorage.domStorageItemsCleared_Handler {
    return this._domStorageItemsCleared;
  }
  set domStorageItemsCleared(handler: DOMStorage.domStorageItemsCleared_Handler) {
    if (this._domStorageItemsCleared) {
      this._client.removeListener("DOMStorage.domStorageItemsCleared", this._domStorageItemsCleared);
    }
    this._domStorageItemsCleared = handler;
    if (handler) {
      this._client.on("DOMStorage.domStorageItemsCleared", handler);
    }
  }
  get domStorageItemRemoved(): DOMStorage.domStorageItemRemoved_Handler {
    return this._domStorageItemRemoved;
  }
  set domStorageItemRemoved(handler: DOMStorage.domStorageItemRemoved_Handler) {
    if (this._domStorageItemRemoved) {
      this._client.removeListener("DOMStorage.domStorageItemRemoved", this._domStorageItemRemoved);
    }
    this._domStorageItemRemoved = handler;
    if (handler) {
      this._client.on("DOMStorage.domStorageItemRemoved", handler);
    }
  }
  get domStorageItemAdded(): DOMStorage.domStorageItemAdded_Handler {
    return this._domStorageItemAdded;
  }
  set domStorageItemAdded(handler: DOMStorage.domStorageItemAdded_Handler) {
    if (this._domStorageItemAdded) {
      this._client.removeListener("DOMStorage.domStorageItemAdded", this._domStorageItemAdded);
    }
    this._domStorageItemAdded = handler;
    if (handler) {
      this._client.on("DOMStorage.domStorageItemAdded", handler);
    }
  }
  get domStorageItemUpdated(): DOMStorage.domStorageItemUpdated_Handler {
    return this._domStorageItemUpdated;
  }
  set domStorageItemUpdated(handler: DOMStorage.domStorageItemUpdated_Handler) {
    if (this._domStorageItemUpdated) {
      this._client.removeListener("DOMStorage.domStorageItemUpdated", this._domStorageItemUpdated);
    }
    this._domStorageItemUpdated = handler;
    if (handler) {
      this._client.on("DOMStorage.domStorageItemUpdated", handler);
    }
  }
}
export namespace DOMStorage {
  /** DOM Storage identifier. */
  export interface StorageId {
    /** Security origin for the storage. */
    securityOrigin: string;
    /** Whether the storage is local storage (not session storage). */
    isLocalStorage: boolean;
  }
  /** DOM Storage item. */
  export type Item = string[];
  export type domStorageItemsCleared_Parameters = {
    storageId: StorageId;
  };
  export type domStorageItemsCleared_Handler = (params: domStorageItemsCleared_Parameters) => void;
  export type domStorageItemRemoved_Parameters = {
    storageId: StorageId;
    key: string;
  };
  export type domStorageItemRemoved_Handler = (params: domStorageItemRemoved_Parameters) => void;
  export type domStorageItemAdded_Parameters = {
    storageId: StorageId;
    key: string;
    newValue: string;
  };
  export type domStorageItemAdded_Handler = (params: domStorageItemAdded_Parameters) => void;
  export type domStorageItemUpdated_Parameters = {
    storageId: StorageId;
    key: string;
    oldValue: string;
    newValue: string;
  };
  export type domStorageItemUpdated_Handler = (params: domStorageItemUpdated_Parameters) => void;
  export type getDOMStorageItems_Parameters = {
    storageId: StorageId;
  };
  export type getDOMStorageItems_Return = {
    entries: Item[];
  };
  export type setDOMStorageItem_Parameters = {
    storageId: StorageId;
    key: string;
    value: string;
  };
  export type removeDOMStorageItem_Parameters = {
    storageId: StorageId;
    key: string;
  };
}
export class ApplicationCache {
  private _applicationCacheStatusUpdated: ApplicationCache.applicationCacheStatusUpdated_Handler = undefined;
  private _networkStateUpdated: ApplicationCache.networkStateUpdated_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Returns array of frame identifiers with manifest urls for each frame containing a document associated with some application cache. */
  getFramesWithManifests(): Promise<ApplicationCache.getFramesWithManifests_Return> {
    return this._client.send<ApplicationCache.getFramesWithManifests_Return>("ApplicationCache.getFramesWithManifests");
  }
  /** Enables application cache domain notifications. */
  enable(): Promise<void> {
    return this._client.send<void>("ApplicationCache.enable");
  }
  /** Returns manifest URL for document in the given frame. */
  getManifestForFrame(params: ApplicationCache.getManifestForFrame_Parameters): Promise<ApplicationCache.getManifestForFrame_Return> {
    return this._client.send<ApplicationCache.getManifestForFrame_Return>("ApplicationCache.getManifestForFrame", params);
  }
  /** Returns relevant application cache data for the document in given frame. */
  getApplicationCacheForFrame(params: ApplicationCache.getApplicationCacheForFrame_Parameters): Promise<ApplicationCache.getApplicationCacheForFrame_Return> {
    return this._client.send<ApplicationCache.getApplicationCacheForFrame_Return>("ApplicationCache.getApplicationCacheForFrame", params);
  }
  get applicationCacheStatusUpdated(): ApplicationCache.applicationCacheStatusUpdated_Handler {
    return this._applicationCacheStatusUpdated;
  }
  set applicationCacheStatusUpdated(handler: ApplicationCache.applicationCacheStatusUpdated_Handler) {
    if (this._applicationCacheStatusUpdated) {
      this._client.removeListener("ApplicationCache.applicationCacheStatusUpdated", this._applicationCacheStatusUpdated);
    }
    this._applicationCacheStatusUpdated = handler;
    if (handler) {
      this._client.on("ApplicationCache.applicationCacheStatusUpdated", handler);
    }
  }
  get networkStateUpdated(): ApplicationCache.networkStateUpdated_Handler {
    return this._networkStateUpdated;
  }
  set networkStateUpdated(handler: ApplicationCache.networkStateUpdated_Handler) {
    if (this._networkStateUpdated) {
      this._client.removeListener("ApplicationCache.networkStateUpdated", this._networkStateUpdated);
    }
    this._networkStateUpdated = handler;
    if (handler) {
      this._client.on("ApplicationCache.networkStateUpdated", handler);
    }
  }
}
export namespace ApplicationCache {
  /** Detailed application cache resource information. */
  export interface ApplicationCacheResource {
    /** Resource url. */
    url: string;
    /** Resource size. */
    size: number;
    /** Resource type. */
    type: string;
  }
  /** Detailed application cache information. */
  export interface ApplicationCache {
    /** Manifest URL. */
    manifestURL: string;
    /** Application cache size. */
    size: number;
    /** Application cache creation time. */
    creationTime: number;
    /** Application cache update time. */
    updateTime: number;
    /** Application cache resources. */
    resources: ApplicationCacheResource[];
  }
  /** Frame identifier - manifest URL pair. */
  export interface FrameWithManifest {
    /** Frame identifier. */
    frameId: Page.FrameId;
    /** Manifest URL. */
    manifestURL: string;
    /** Application cache status. */
    status: number;
  }
  export type applicationCacheStatusUpdated_Parameters = {
    /** Identifier of the frame containing document whose application cache updated status. */
    frameId: Page.FrameId;
    /** Manifest URL. */
    manifestURL: string;
    /** Updated application cache status. */
    status: number;
  };
  export type applicationCacheStatusUpdated_Handler = (params: applicationCacheStatusUpdated_Parameters) => void;
  export type networkStateUpdated_Parameters = {
    isNowOnline: boolean;
  };
  export type networkStateUpdated_Handler = (params: networkStateUpdated_Parameters) => void;
  export type getFramesWithManifests_Return = {
    /** Array of frame identifiers with manifest urls for each frame containing a document associated with some application cache. */
    frameIds: FrameWithManifest[];
  };
  export type getManifestForFrame_Parameters = {
    /** Identifier of the frame containing document whose manifest is retrieved. */
    frameId: Page.FrameId;
  };
  export type getManifestForFrame_Return = {
    /** Manifest URL for document in the given frame. */
    manifestURL: string;
  };
  export type getApplicationCacheForFrame_Parameters = {
    /** Identifier of the frame containing document whose application cache is retrieved. */
    frameId: Page.FrameId;
  };
  export type getApplicationCacheForFrame_Return = {
    /** Relevant application cache data for the document in given frame. */
    applicationCache: ApplicationCache;
  };
}
export class FileSystem {
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables events from backend. */
  enable(): Promise<void> {
    return this._client.send<void>("FileSystem.enable");
  }
  /** Disables events from backend. */
  disable(): Promise<void> {
    return this._client.send<void>("FileSystem.disable");
  }
  /** Returns root directory of the FileSystem, if exists. */
  requestFileSystemRoot(params: FileSystem.requestFileSystemRoot_Parameters): Promise<FileSystem.requestFileSystemRoot_Return> {
    return this._client.send<FileSystem.requestFileSystemRoot_Return>("FileSystem.requestFileSystemRoot", params);
  }
  /** Returns content of the directory. */
  requestDirectoryContent(params: FileSystem.requestDirectoryContent_Parameters): Promise<FileSystem.requestDirectoryContent_Return> {
    return this._client.send<FileSystem.requestDirectoryContent_Return>("FileSystem.requestDirectoryContent", params);
  }
  /** Returns metadata of the entry. */
  requestMetadata(params: FileSystem.requestMetadata_Parameters): Promise<FileSystem.requestMetadata_Return> {
    return this._client.send<FileSystem.requestMetadata_Return>("FileSystem.requestMetadata", params);
  }
  /** Returns content of the file. Result should be sliced into [start, end). */
  requestFileContent(params: FileSystem.requestFileContent_Parameters): Promise<FileSystem.requestFileContent_Return> {
    return this._client.send<FileSystem.requestFileContent_Return>("FileSystem.requestFileContent", params);
  }
  /** Deletes specified entry. If the entry is a directory, the agent deletes children recursively. */
  deleteEntry(params: FileSystem.deleteEntry_Parameters): Promise<FileSystem.deleteEntry_Return> {
    return this._client.send<FileSystem.deleteEntry_Return>("FileSystem.deleteEntry", params);
  }
}
export namespace FileSystem {
  /** Represents a browser side file or directory. */
  export interface Entry {
    /** filesystem: URL for the entry. */
    url: string;
    /** The name of the file or directory. */
    name: string;
    /** True if the entry is a directory. */
    isDirectory: boolean;
    /** MIME type of the entry, available for a file only. */
    mimeType?: string;
    /** ResourceType of the entry, available for a file only. */
    resourceType?: Page.ResourceType;
    /** True if the entry is a text file. */
    isTextFile?: boolean;
  }
  /** Represents metadata of a file or entry. */
  export interface Metadata {
    /** Modification time. */
    modificationTime: number;
    /** File size. This field is always zero for directories. */
    size: number;
  }
  export type requestFileSystemRoot_Parameters = {
    /** Security origin of requesting FileSystem. One of frames in current page needs to have this security origin. */
    origin: string;
    /** FileSystem type of requesting FileSystem. */
    type: "temporary" | "persistent";
  };
  export type requestFileSystemRoot_Return = {
    /** 0, if no error. Otherwise, errorCode is set to FileError::ErrorCode value. */
    errorCode: number;
    /** Contains root of the requested FileSystem if the command completed successfully. */
    root?: Entry;
  };
  export type requestDirectoryContent_Parameters = {
    /** URL of the directory that the frontend is requesting to read from. */
    url: string;
  };
  export type requestDirectoryContent_Return = {
    /** 0, if no error. Otherwise, errorCode is set to FileError::ErrorCode value. */
    errorCode: number;
    /** Contains all entries on directory if the command completed successfully. */
    entries?: Entry[];
  };
  export type requestMetadata_Parameters = {
    /** URL of the entry that the frontend is requesting to get metadata from. */
    url: string;
  };
  export type requestMetadata_Return = {
    /** 0, if no error. Otherwise, errorCode is set to FileError::ErrorCode value. */
    errorCode: number;
    /** Contains metadata of the entry if the command completed successfully. */
    metadata?: Metadata;
  };
  export type requestFileContent_Parameters = {
    /** URL of the file that the frontend is requesting to read from. */
    url: string;
    /** True if the content should be read as text, otherwise the result will be returned as base64 encoded text. */
    readAsText: boolean;
    /** Specifies the start of range to read. */
    start?: number;
    /** Specifies the end of range to read exclusively. */
    end?: number;
    /** Overrides charset of the content when content is served as text. */
    charset?: string;
  };
  export type requestFileContent_Return = {
    /** 0, if no error. Otherwise, errorCode is set to FileError::ErrorCode value. */
    errorCode: number;
    /** Content of the file. */
    content?: string;
    /** Charset of the content if it is served as text. */
    charset?: string;
  };
  export type deleteEntry_Parameters = {
    /** URL of the entry to delete. */
    url: string;
  };
  export type deleteEntry_Return = {
    /** 0, if no error. Otherwise errorCode is set to FileError::ErrorCode value. */
    errorCode: number;
  };
}
/** This domain exposes DOM read/write operations. Each DOM Node is represented with its mirror object that has an <code>id</code>. This <code>id</code> can be used to get additional information on the Node, resolve it into the JavaScript object wrapper, etc. It is important that client receives DOM events only for the nodes that are known to the client. Backend keeps track of the nodes that were sent to the client and never sends the same node twice. It is client's responsibility to collect information about the nodes that were sent to the client.<p>Note that <code>iframe</code> owner elements will return corresponding document elements as their child nodes.</p> */
export class DOM {
  private _documentUpdated: DOM.documentUpdated_Handler = undefined;
  private _inspectNodeRequested: DOM.inspectNodeRequested_Handler = undefined;
  private _setChildNodes: DOM.setChildNodes_Handler = undefined;
  private _attributeModified: DOM.attributeModified_Handler = undefined;
  private _attributeRemoved: DOM.attributeRemoved_Handler = undefined;
  private _inlineStyleInvalidated: DOM.inlineStyleInvalidated_Handler = undefined;
  private _characterDataModified: DOM.characterDataModified_Handler = undefined;
  private _childNodeCountUpdated: DOM.childNodeCountUpdated_Handler = undefined;
  private _childNodeInserted: DOM.childNodeInserted_Handler = undefined;
  private _childNodeRemoved: DOM.childNodeRemoved_Handler = undefined;
  private _shadowRootPushed: DOM.shadowRootPushed_Handler = undefined;
  private _shadowRootPopped: DOM.shadowRootPopped_Handler = undefined;
  private _pseudoElementAdded: DOM.pseudoElementAdded_Handler = undefined;
  private _pseudoElementRemoved: DOM.pseudoElementRemoved_Handler = undefined;
  private _distributedNodesUpdated: DOM.distributedNodesUpdated_Handler = undefined;
  private _nodeHighlightRequested: DOM.nodeHighlightRequested_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables DOM agent for the given page. */
  enable(): Promise<void> {
    return this._client.send<void>("DOM.enable");
  }
  /** Disables DOM agent for the given page. */
  disable(): Promise<void> {
    return this._client.send<void>("DOM.disable");
  }
  /** Returns the root DOM node to the caller. */
  getDocument(): Promise<DOM.getDocument_Return> {
    return this._client.send<DOM.getDocument_Return>("DOM.getDocument");
  }
  /** Requests that children of the node with given id are returned to the caller in form of <code>setChildNodes</code> events where not only immediate children are retrieved, but all children down to the specified depth. */
  requestChildNodes(params: DOM.requestChildNodes_Parameters): Promise<void> {
    return this._client.send<void>("DOM.requestChildNodes", params);
  }
  /** Executes <code>querySelector</code> on a given node. */
  querySelector(params: DOM.querySelector_Parameters): Promise<DOM.querySelector_Return> {
    return this._client.send<DOM.querySelector_Return>("DOM.querySelector", params);
  }
  /** Executes <code>querySelectorAll</code> on a given node. */
  querySelectorAll(params: DOM.querySelectorAll_Parameters): Promise<DOM.querySelectorAll_Return> {
    return this._client.send<DOM.querySelectorAll_Return>("DOM.querySelectorAll", params);
  }
  /** Sets node name for a node with given id. */
  setNodeName(params: DOM.setNodeName_Parameters): Promise<DOM.setNodeName_Return> {
    return this._client.send<DOM.setNodeName_Return>("DOM.setNodeName", params);
  }
  /** Sets node value for a node with given id. */
  setNodeValue(params: DOM.setNodeValue_Parameters): Promise<void> {
    return this._client.send<void>("DOM.setNodeValue", params);
  }
  /** Removes node with given id. */
  removeNode(params: DOM.removeNode_Parameters): Promise<void> {
    return this._client.send<void>("DOM.removeNode", params);
  }
  /** Sets attribute for an element with given id. */
  setAttributeValue(params: DOM.setAttributeValue_Parameters): Promise<void> {
    return this._client.send<void>("DOM.setAttributeValue", params);
  }
  /** Sets attributes on element with given id. This method is useful when user edits some existing attribute value and types in several attribute name/value pairs. */
  setAttributesAsText(params: DOM.setAttributesAsText_Parameters): Promise<void> {
    return this._client.send<void>("DOM.setAttributesAsText", params);
  }
  /** Removes attribute with given name from an element with given id. */
  removeAttribute(params: DOM.removeAttribute_Parameters): Promise<void> {
    return this._client.send<void>("DOM.removeAttribute", params);
  }
  /** Returns node's HTML markup. */
  getOuterHTML(params: DOM.getOuterHTML_Parameters): Promise<DOM.getOuterHTML_Return> {
    return this._client.send<DOM.getOuterHTML_Return>("DOM.getOuterHTML", params);
  }
  /** Sets node HTML markup, returns new node id. */
  setOuterHTML(params: DOM.setOuterHTML_Parameters): Promise<void> {
    return this._client.send<void>("DOM.setOuterHTML", params);
  }
  /** Searches for a given string in the DOM tree. Use <code>getSearchResults</code> to access search results or <code>cancelSearch</code> to end this search session. */
  performSearch(params: DOM.performSearch_Parameters): Promise<DOM.performSearch_Return> {
    return this._client.send<DOM.performSearch_Return>("DOM.performSearch", params);
  }
  /** Returns search results from given <code>fromIndex</code> to given <code>toIndex</code> from the sarch with the given identifier. */
  getSearchResults(params: DOM.getSearchResults_Parameters): Promise<DOM.getSearchResults_Return> {
    return this._client.send<DOM.getSearchResults_Return>("DOM.getSearchResults", params);
  }
  /** Discards search results from the session with the given id. <code>getSearchResults</code> should no longer be called for that search. */
  discardSearchResults(params: DOM.discardSearchResults_Parameters): Promise<void> {
    return this._client.send<void>("DOM.discardSearchResults", params);
  }
  /** Requests that the node is sent to the caller given the JavaScript node object reference. All nodes that form the path from the node to the root are also sent to the client as a series of <code>setChildNodes</code> notifications. */
  requestNode(params: DOM.requestNode_Parameters): Promise<DOM.requestNode_Return> {
    return this._client.send<DOM.requestNode_Return>("DOM.requestNode", params);
  }
  /** Enters the 'inspect' mode. In this mode, elements that user is hovering over are highlighted. Backend then generates 'inspectNodeRequested' event upon element selection. */
  setInspectMode(params: DOM.setInspectMode_Parameters): Promise<void> {
    return this._client.send<void>("DOM.setInspectMode", params);
  }
  /** Highlights given rectangle. Coordinates are absolute with respect to the main frame viewport. */
  highlightRect(params: DOM.highlightRect_Parameters): Promise<void> {
    return this._client.send<void>("DOM.highlightRect", params);
  }
  /** Highlights given quad. Coordinates are absolute with respect to the main frame viewport. */
  highlightQuad(params: DOM.highlightQuad_Parameters): Promise<void> {
    return this._client.send<void>("DOM.highlightQuad", params);
  }
  /** Highlights DOM node with given id or with the given JavaScript object wrapper. Either nodeId or objectId must be specified. */
  highlightNode(params: DOM.highlightNode_Parameters): Promise<void> {
    return this._client.send<void>("DOM.highlightNode", params);
  }
  /** Hides DOM node highlight. */
  hideHighlight(): Promise<void> {
    return this._client.send<void>("DOM.hideHighlight");
  }
  /** Highlights owner element of the frame with given id. */
  highlightFrame(params: DOM.highlightFrame_Parameters): Promise<void> {
    return this._client.send<void>("DOM.highlightFrame", params);
  }
  /** Requests that the node is sent to the caller given its path. // FIXME, use XPath */
  pushNodeByPathToFrontend(params: DOM.pushNodeByPathToFrontend_Parameters): Promise<DOM.pushNodeByPathToFrontend_Return> {
    return this._client.send<DOM.pushNodeByPathToFrontend_Return>("DOM.pushNodeByPathToFrontend", params);
  }
  /** Requests that a batch of nodes is sent to the caller given their backend node ids. */
  pushNodesByBackendIdsToFrontend(params: DOM.pushNodesByBackendIdsToFrontend_Parameters): Promise<DOM.pushNodesByBackendIdsToFrontend_Return> {
    return this._client.send<DOM.pushNodesByBackendIdsToFrontend_Return>("DOM.pushNodesByBackendIdsToFrontend", params);
  }
  /** Enables console to refer to the node with given id via $x (see Command Line API for more details $x functions). */
  setInspectedNode(params: DOM.setInspectedNode_Parameters): Promise<void> {
    return this._client.send<void>("DOM.setInspectedNode", params);
  }
  /** Resolves JavaScript node object for given node id. */
  resolveNode(params: DOM.resolveNode_Parameters): Promise<DOM.resolveNode_Return> {
    return this._client.send<DOM.resolveNode_Return>("DOM.resolveNode", params);
  }
  /** Returns attributes for the specified node. */
  getAttributes(params: DOM.getAttributes_Parameters): Promise<DOM.getAttributes_Return> {
    return this._client.send<DOM.getAttributes_Return>("DOM.getAttributes", params);
  }
  /** Creates a deep copy of the specified node and places it into the target container before the given anchor. */
  copyTo(params: DOM.copyTo_Parameters): Promise<DOM.copyTo_Return> {
    return this._client.send<DOM.copyTo_Return>("DOM.copyTo", params);
  }
  /** Moves node into the new container, places it before the given anchor. */
  moveTo(params: DOM.moveTo_Parameters): Promise<DOM.moveTo_Return> {
    return this._client.send<DOM.moveTo_Return>("DOM.moveTo", params);
  }
  /** Undoes the last performed action. */
  undo(): Promise<void> {
    return this._client.send<void>("DOM.undo");
  }
  /** Re-does the last undone action. */
  redo(): Promise<void> {
    return this._client.send<void>("DOM.redo");
  }
  /** Marks last undoable state. */
  markUndoableState(): Promise<void> {
    return this._client.send<void>("DOM.markUndoableState");
  }
  /** Focuses the given element. */
  focus(params: DOM.focus_Parameters): Promise<void> {
    return this._client.send<void>("DOM.focus", params);
  }
  /** Sets files for the given file input element. */
  setFileInputFiles(params: DOM.setFileInputFiles_Parameters): Promise<void> {
    return this._client.send<void>("DOM.setFileInputFiles", params);
  }
  /** Returns boxes for the currently selected nodes. */
  getBoxModel(params: DOM.getBoxModel_Parameters): Promise<DOM.getBoxModel_Return> {
    return this._client.send<DOM.getBoxModel_Return>("DOM.getBoxModel", params);
  }
  /** Returns node id at given location. */
  getNodeForLocation(params: DOM.getNodeForLocation_Parameters): Promise<DOM.getNodeForLocation_Return> {
    return this._client.send<DOM.getNodeForLocation_Return>("DOM.getNodeForLocation", params);
  }
  /** Returns the id of the nearest ancestor that is a relayout boundary. */
  getRelayoutBoundary(params: DOM.getRelayoutBoundary_Parameters): Promise<DOM.getRelayoutBoundary_Return> {
    return this._client.send<DOM.getRelayoutBoundary_Return>("DOM.getRelayoutBoundary", params);
  }
  /** For testing. */
  getHighlightObjectForTest(params: DOM.getHighlightObjectForTest_Parameters): Promise<DOM.getHighlightObjectForTest_Return> {
    return this._client.send<DOM.getHighlightObjectForTest_Return>("DOM.getHighlightObjectForTest", params);
  }
  /** Fired when <code>Document</code> has been totally updated. Node ids are no longer valid. */
  get documentUpdated(): DOM.documentUpdated_Handler {
    return this._documentUpdated;
  }
  set documentUpdated(handler: DOM.documentUpdated_Handler) {
    if (this._documentUpdated) {
      this._client.removeListener("DOM.documentUpdated", this._documentUpdated);
    }
    this._documentUpdated = handler;
    if (handler) {
      this._client.on("DOM.documentUpdated", handler);
    }
  }
  /** Fired when the node should be inspected. This happens after call to <code>setInspectMode</code>. */
  get inspectNodeRequested(): DOM.inspectNodeRequested_Handler {
    return this._inspectNodeRequested;
  }
  set inspectNodeRequested(handler: DOM.inspectNodeRequested_Handler) {
    if (this._inspectNodeRequested) {
      this._client.removeListener("DOM.inspectNodeRequested", this._inspectNodeRequested);
    }
    this._inspectNodeRequested = handler;
    if (handler) {
      this._client.on("DOM.inspectNodeRequested", handler);
    }
  }
  /** Fired when backend wants to provide client with the missing DOM structure. This happens upon most of the calls requesting node ids. */
  get setChildNodes(): DOM.setChildNodes_Handler {
    return this._setChildNodes;
  }
  set setChildNodes(handler: DOM.setChildNodes_Handler) {
    if (this._setChildNodes) {
      this._client.removeListener("DOM.setChildNodes", this._setChildNodes);
    }
    this._setChildNodes = handler;
    if (handler) {
      this._client.on("DOM.setChildNodes", handler);
    }
  }
  /** Fired when <code>Element</code>'s attribute is modified. */
  get attributeModified(): DOM.attributeModified_Handler {
    return this._attributeModified;
  }
  set attributeModified(handler: DOM.attributeModified_Handler) {
    if (this._attributeModified) {
      this._client.removeListener("DOM.attributeModified", this._attributeModified);
    }
    this._attributeModified = handler;
    if (handler) {
      this._client.on("DOM.attributeModified", handler);
    }
  }
  /** Fired when <code>Element</code>'s attribute is removed. */
  get attributeRemoved(): DOM.attributeRemoved_Handler {
    return this._attributeRemoved;
  }
  set attributeRemoved(handler: DOM.attributeRemoved_Handler) {
    if (this._attributeRemoved) {
      this._client.removeListener("DOM.attributeRemoved", this._attributeRemoved);
    }
    this._attributeRemoved = handler;
    if (handler) {
      this._client.on("DOM.attributeRemoved", handler);
    }
  }
  /** Fired when <code>Element</code>'s inline style is modified via a CSS property modification. */
  get inlineStyleInvalidated(): DOM.inlineStyleInvalidated_Handler {
    return this._inlineStyleInvalidated;
  }
  set inlineStyleInvalidated(handler: DOM.inlineStyleInvalidated_Handler) {
    if (this._inlineStyleInvalidated) {
      this._client.removeListener("DOM.inlineStyleInvalidated", this._inlineStyleInvalidated);
    }
    this._inlineStyleInvalidated = handler;
    if (handler) {
      this._client.on("DOM.inlineStyleInvalidated", handler);
    }
  }
  /** Mirrors <code>DOMCharacterDataModified</code> event. */
  get characterDataModified(): DOM.characterDataModified_Handler {
    return this._characterDataModified;
  }
  set characterDataModified(handler: DOM.characterDataModified_Handler) {
    if (this._characterDataModified) {
      this._client.removeListener("DOM.characterDataModified", this._characterDataModified);
    }
    this._characterDataModified = handler;
    if (handler) {
      this._client.on("DOM.characterDataModified", handler);
    }
  }
  /** Fired when <code>Container</code>'s child node count has changed. */
  get childNodeCountUpdated(): DOM.childNodeCountUpdated_Handler {
    return this._childNodeCountUpdated;
  }
  set childNodeCountUpdated(handler: DOM.childNodeCountUpdated_Handler) {
    if (this._childNodeCountUpdated) {
      this._client.removeListener("DOM.childNodeCountUpdated", this._childNodeCountUpdated);
    }
    this._childNodeCountUpdated = handler;
    if (handler) {
      this._client.on("DOM.childNodeCountUpdated", handler);
    }
  }
  /** Mirrors <code>DOMNodeInserted</code> event. */
  get childNodeInserted(): DOM.childNodeInserted_Handler {
    return this._childNodeInserted;
  }
  set childNodeInserted(handler: DOM.childNodeInserted_Handler) {
    if (this._childNodeInserted) {
      this._client.removeListener("DOM.childNodeInserted", this._childNodeInserted);
    }
    this._childNodeInserted = handler;
    if (handler) {
      this._client.on("DOM.childNodeInserted", handler);
    }
  }
  /** Mirrors <code>DOMNodeRemoved</code> event. */
  get childNodeRemoved(): DOM.childNodeRemoved_Handler {
    return this._childNodeRemoved;
  }
  set childNodeRemoved(handler: DOM.childNodeRemoved_Handler) {
    if (this._childNodeRemoved) {
      this._client.removeListener("DOM.childNodeRemoved", this._childNodeRemoved);
    }
    this._childNodeRemoved = handler;
    if (handler) {
      this._client.on("DOM.childNodeRemoved", handler);
    }
  }
  /** Called when shadow root is pushed into the element. */
  get shadowRootPushed(): DOM.shadowRootPushed_Handler {
    return this._shadowRootPushed;
  }
  set shadowRootPushed(handler: DOM.shadowRootPushed_Handler) {
    if (this._shadowRootPushed) {
      this._client.removeListener("DOM.shadowRootPushed", this._shadowRootPushed);
    }
    this._shadowRootPushed = handler;
    if (handler) {
      this._client.on("DOM.shadowRootPushed", handler);
    }
  }
  /** Called when shadow root is popped from the element. */
  get shadowRootPopped(): DOM.shadowRootPopped_Handler {
    return this._shadowRootPopped;
  }
  set shadowRootPopped(handler: DOM.shadowRootPopped_Handler) {
    if (this._shadowRootPopped) {
      this._client.removeListener("DOM.shadowRootPopped", this._shadowRootPopped);
    }
    this._shadowRootPopped = handler;
    if (handler) {
      this._client.on("DOM.shadowRootPopped", handler);
    }
  }
  /** Called when a pseudo element is added to an element. */
  get pseudoElementAdded(): DOM.pseudoElementAdded_Handler {
    return this._pseudoElementAdded;
  }
  set pseudoElementAdded(handler: DOM.pseudoElementAdded_Handler) {
    if (this._pseudoElementAdded) {
      this._client.removeListener("DOM.pseudoElementAdded", this._pseudoElementAdded);
    }
    this._pseudoElementAdded = handler;
    if (handler) {
      this._client.on("DOM.pseudoElementAdded", handler);
    }
  }
  /** Called when a pseudo element is removed from an element. */
  get pseudoElementRemoved(): DOM.pseudoElementRemoved_Handler {
    return this._pseudoElementRemoved;
  }
  set pseudoElementRemoved(handler: DOM.pseudoElementRemoved_Handler) {
    if (this._pseudoElementRemoved) {
      this._client.removeListener("DOM.pseudoElementRemoved", this._pseudoElementRemoved);
    }
    this._pseudoElementRemoved = handler;
    if (handler) {
      this._client.on("DOM.pseudoElementRemoved", handler);
    }
  }
  /** Called when distrubution is changed. */
  get distributedNodesUpdated(): DOM.distributedNodesUpdated_Handler {
    return this._distributedNodesUpdated;
  }
  set distributedNodesUpdated(handler: DOM.distributedNodesUpdated_Handler) {
    if (this._distributedNodesUpdated) {
      this._client.removeListener("DOM.distributedNodesUpdated", this._distributedNodesUpdated);
    }
    this._distributedNodesUpdated = handler;
    if (handler) {
      this._client.on("DOM.distributedNodesUpdated", handler);
    }
  }
  get nodeHighlightRequested(): DOM.nodeHighlightRequested_Handler {
    return this._nodeHighlightRequested;
  }
  set nodeHighlightRequested(handler: DOM.nodeHighlightRequested_Handler) {
    if (this._nodeHighlightRequested) {
      this._client.removeListener("DOM.nodeHighlightRequested", this._nodeHighlightRequested);
    }
    this._nodeHighlightRequested = handler;
    if (handler) {
      this._client.on("DOM.nodeHighlightRequested", handler);
    }
  }
}
export namespace DOM {
  /** Unique DOM node identifier. */
  export type NodeId = number;
  /** Unique DOM node identifier used to reference a node that may not have been pushed to the front-end. */
  export type BackendNodeId = number;
  /** Backend node with a friendly name. */
  export interface BackendNode {
    /** <code>Node</code>'s nodeType. */
    nodeType: number;
    /** <code>Node</code>'s nodeName. */
    nodeName: string;
    backendNodeId: BackendNodeId;
  }
  /** Pseudo element type. */
  export type PseudoType = "first-line" | "first-letter" | "before" | "after" | "backdrop" | "selection" | "first-line-inherited" | "scrollbar" | "scrollbar-thumb" | "scrollbar-button" | "scrollbar-track" | "scrollbar-track-piece" | "scrollbar-corner" | "resizer" | "input-list-button";
  /** Shadow root type. */
  export type ShadowRootType = "user-agent" | "open" | "closed";
  /** DOM interaction is implemented in terms of mirror objects that represent the actual DOM nodes. DOMNode is a base node mirror type. */
  export interface Node {
    /** Node identifier that is passed into the rest of the DOM messages as the <code>nodeId</code>. Backend will only push node with given <code>id</code> once. It is aware of all requested nodes and will only fire DOM events for nodes known to the client. */
    nodeId: NodeId;
    /** <code>Node</code>'s nodeType. */
    nodeType: number;
    /** <code>Node</code>'s nodeName. */
    nodeName: string;
    /** <code>Node</code>'s localName. */
    localName: string;
    /** <code>Node</code>'s nodeValue. */
    nodeValue: string;
    /** Child count for <code>Container</code> nodes. */
    childNodeCount?: number;
    /** Child nodes of this node when requested with children. */
    children?: Node[];
    /** Attributes of the <code>Element</code> node in the form of flat array <code>[name1, value1, name2, value2]</code>. */
    attributes?: string[];
    /** Document URL that <code>Document</code> or <code>FrameOwner</code> node points to. */
    documentURL?: string;
    /** Base URL that <code>Document</code> or <code>FrameOwner</code> node uses for URL completion. */
    baseURL?: string;
    /** <code>DocumentType</code>'s publicId. */
    publicId?: string;
    /** <code>DocumentType</code>'s systemId. */
    systemId?: string;
    /** <code>DocumentType</code>'s internalSubset. */
    internalSubset?: string;
    /** <code>Document</code>'s XML version in case of XML documents. */
    xmlVersion?: string;
    /** <code>Attr</code>'s name. */
    name?: string;
    /** <code>Attr</code>'s value. */
    value?: string;
    /** Pseudo element type for this node. */
    pseudoType?: PseudoType;
    /** Shadow root type. */
    shadowRootType?: ShadowRootType;
    /** Frame ID for frame owner elements. */
    frameId?: Page.FrameId;
    /** Content document for frame owner elements. */
    contentDocument?: Node;
    /** Shadow root list for given element host. */
    shadowRoots?: Node[];
    /** Content document fragment for template elements. */
    templateContent?: Node;
    /** Pseudo elements associated with this node. */
    pseudoElements?: Node[];
    /** Import document for the HTMLImport links. */
    importedDocument?: Node;
    /** Distributed nodes for given insertion point. */
    distributedNodes?: BackendNode[];
  }
  /** A structure holding an RGBA color. */
  export interface RGBA {
    /** The red component, in the [0-255] range. */
    r: number;
    /** The green component, in the [0-255] range. */
    g: number;
    /** The blue component, in the [0-255] range. */
    b: number;
    /** The alpha component, in the [0-1] range (default: 1). */
    a?: number;
  }
  /** An array of quad vertices, x immediately followed by y for each point, points clock-wise. */
  export type Quad = number[];
  /** Box model. */
  export interface BoxModel {
    /** Content box */
    content: Quad;
    /** Padding box */
    padding: Quad;
    /** Border box */
    border: Quad;
    /** Margin box */
    margin: Quad;
    /** Node width */
    width: number;
    /** Node height */
    height: number;
    /** Shape outside coordinates */
    shapeOutside?: ShapeOutsideInfo;
  }
  /** CSS Shape Outside details. */
  export interface ShapeOutsideInfo {
    /** Shape bounds */
    bounds: Quad;
    /** Shape coordinate details */
    shape: any[];
    /** Margin shape bounds */
    marginShape: any[];
  }
  /** Rectangle. */
  export interface Rect {
    /** X coordinate */
    x: number;
    /** Y coordinate */
    y: number;
    /** Rectangle width */
    width: number;
    /** Rectangle height */
    height: number;
  }
  /** Configuration data for the highlighting of page elements. */
  export interface HighlightConfig {
    /** Whether the node info tooltip should be shown (default: false). */
    showInfo?: boolean;
    /** Whether the rulers should be shown (default: false). */
    showRulers?: boolean;
    /** Whether the extension lines from node to the rulers should be shown (default: false). */
    showExtensionLines?: boolean;
    displayAsMaterial?: boolean;
    /** The content box highlight fill color (default: transparent). */
    contentColor?: RGBA;
    /** The padding highlight fill color (default: transparent). */
    paddingColor?: RGBA;
    /** The border highlight fill color (default: transparent). */
    borderColor?: RGBA;
    /** The margin highlight fill color (default: transparent). */
    marginColor?: RGBA;
    /** The event target element highlight fill color (default: transparent). */
    eventTargetColor?: RGBA;
    /** The shape outside fill color (default: transparent). */
    shapeColor?: RGBA;
    /** The shape margin fill color (default: transparent). */
    shapeMarginColor?: RGBA;
    /** Selectors to highlight relevant nodes. */
    selectorList?: string;
  }
  export type InspectMode = "searchForNode" | "searchForUAShadowDOM" | "showLayoutEditor" | "none";
  export type documentUpdated_Handler = () => void;
  export type inspectNodeRequested_Parameters = {
    /** Id of the node to inspect. */
    backendNodeId: BackendNodeId;
  };
  export type inspectNodeRequested_Handler = (params: inspectNodeRequested_Parameters) => void;
  export type setChildNodes_Parameters = {
    /** Parent node id to populate with children. */
    parentId: NodeId;
    /** Child nodes array. */
    nodes: Node[];
  };
  export type setChildNodes_Handler = (params: setChildNodes_Parameters) => void;
  export type attributeModified_Parameters = {
    /** Id of the node that has changed. */
    nodeId: NodeId;
    /** Attribute name. */
    name: string;
    /** Attribute value. */
    value: string;
  };
  export type attributeModified_Handler = (params: attributeModified_Parameters) => void;
  export type attributeRemoved_Parameters = {
    /** Id of the node that has changed. */
    nodeId: NodeId;
    /** A ttribute name. */
    name: string;
  };
  export type attributeRemoved_Handler = (params: attributeRemoved_Parameters) => void;
  export type inlineStyleInvalidated_Parameters = {
    /** Ids of the nodes for which the inline styles have been invalidated. */
    nodeIds: NodeId[];
  };
  export type inlineStyleInvalidated_Handler = (params: inlineStyleInvalidated_Parameters) => void;
  export type characterDataModified_Parameters = {
    /** Id of the node that has changed. */
    nodeId: NodeId;
    /** New text value. */
    characterData: string;
  };
  export type characterDataModified_Handler = (params: characterDataModified_Parameters) => void;
  export type childNodeCountUpdated_Parameters = {
    /** Id of the node that has changed. */
    nodeId: NodeId;
    /** New node count. */
    childNodeCount: number;
  };
  export type childNodeCountUpdated_Handler = (params: childNodeCountUpdated_Parameters) => void;
  export type childNodeInserted_Parameters = {
    /** Id of the node that has changed. */
    parentNodeId: NodeId;
    /** If of the previous siblint. */
    previousNodeId: NodeId;
    /** Inserted node data. */
    node: Node;
  };
  export type childNodeInserted_Handler = (params: childNodeInserted_Parameters) => void;
  export type childNodeRemoved_Parameters = {
    /** Parent id. */
    parentNodeId: NodeId;
    /** Id of the node that has been removed. */
    nodeId: NodeId;
  };
  export type childNodeRemoved_Handler = (params: childNodeRemoved_Parameters) => void;
  export type shadowRootPushed_Parameters = {
    /** Host element id. */
    hostId: NodeId;
    /** Shadow root. */
    root: Node;
  };
  export type shadowRootPushed_Handler = (params: shadowRootPushed_Parameters) => void;
  export type shadowRootPopped_Parameters = {
    /** Host element id. */
    hostId: NodeId;
    /** Shadow root id. */
    rootId: NodeId;
  };
  export type shadowRootPopped_Handler = (params: shadowRootPopped_Parameters) => void;
  export type pseudoElementAdded_Parameters = {
    /** Pseudo element's parent element id. */
    parentId: NodeId;
    /** The added pseudo element. */
    pseudoElement: Node;
  };
  export type pseudoElementAdded_Handler = (params: pseudoElementAdded_Parameters) => void;
  export type pseudoElementRemoved_Parameters = {
    /** Pseudo element's parent element id. */
    parentId: NodeId;
    /** The removed pseudo element id. */
    pseudoElementId: NodeId;
  };
  export type pseudoElementRemoved_Handler = (params: pseudoElementRemoved_Parameters) => void;
  export type distributedNodesUpdated_Parameters = {
    /** Insertion point where distrubuted nodes were updated. */
    insertionPointId: NodeId;
    /** Distributed nodes for given insertion point. */
    distributedNodes: BackendNode[];
  };
  export type distributedNodesUpdated_Handler = (params: distributedNodesUpdated_Parameters) => void;
  export type nodeHighlightRequested_Parameters = {
    nodeId: NodeId;
  };
  export type nodeHighlightRequested_Handler = (params: nodeHighlightRequested_Parameters) => void;
  export type getDocument_Return = {
    /** Resulting node. */
    root: Node;
  };
  export type requestChildNodes_Parameters = {
    /** Id of the node to get children for. */
    nodeId: NodeId;
    /** The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the entire subtree or provide an integer larger than 0. */
    depth?: number;
  };
  export type querySelector_Parameters = {
    /** Id of the node to query upon. */
    nodeId: NodeId;
    /** Selector string. */
    selector: string;
  };
  export type querySelector_Return = {
    /** Query selector result. */
    nodeId: NodeId;
  };
  export type querySelectorAll_Parameters = {
    /** Id of the node to query upon. */
    nodeId: NodeId;
    /** Selector string. */
    selector: string;
  };
  export type querySelectorAll_Return = {
    /** Query selector result. */
    nodeIds: NodeId[];
  };
  export type setNodeName_Parameters = {
    /** Id of the node to set name for. */
    nodeId: NodeId;
    /** New node's name. */
    name: string;
  };
  export type setNodeName_Return = {
    /** New node's id. */
    nodeId: NodeId;
  };
  export type setNodeValue_Parameters = {
    /** Id of the node to set value for. */
    nodeId: NodeId;
    /** New node's value. */
    value: string;
  };
  export type removeNode_Parameters = {
    /** Id of the node to remove. */
    nodeId: NodeId;
  };
  export type setAttributeValue_Parameters = {
    /** Id of the element to set attribute for. */
    nodeId: NodeId;
    /** Attribute name. */
    name: string;
    /** Attribute value. */
    value: string;
  };
  export type setAttributesAsText_Parameters = {
    /** Id of the element to set attributes for. */
    nodeId: NodeId;
    /** Text with a number of attributes. Will parse this text using HTML parser. */
    text: string;
    /** Attribute name to replace with new attributes derived from text in case text parsed successfully. */
    name?: string;
  };
  export type removeAttribute_Parameters = {
    /** Id of the element to remove attribute from. */
    nodeId: NodeId;
    /** Name of the attribute to remove. */
    name: string;
  };
  export type getOuterHTML_Parameters = {
    /** Id of the node to get markup for. */
    nodeId: NodeId;
  };
  export type getOuterHTML_Return = {
    /** Outer HTML markup. */
    outerHTML: string;
  };
  export type setOuterHTML_Parameters = {
    /** Id of the node to set markup for. */
    nodeId: NodeId;
    /** Outer HTML markup to set. */
    outerHTML: string;
  };
  export type performSearch_Parameters = {
    /** Plain text or query selector or XPath search query. */
    query: string;
    /** True to search in user agent shadow DOM. */
    includeUserAgentShadowDOM?: boolean;
  };
  export type performSearch_Return = {
    /** Unique search session identifier. */
    searchId: string;
    /** Number of search results. */
    resultCount: number;
  };
  export type getSearchResults_Parameters = {
    /** Unique search session identifier. */
    searchId: string;
    /** Start index of the search result to be returned. */
    fromIndex: number;
    /** End index of the search result to be returned. */
    toIndex: number;
  };
  export type getSearchResults_Return = {
    /** Ids of the search result nodes. */
    nodeIds: NodeId[];
  };
  export type discardSearchResults_Parameters = {
    /** Unique search session identifier. */
    searchId: string;
  };
  export type requestNode_Parameters = {
    /** JavaScript object id to convert into node. */
    objectId: Runtime.RemoteObjectId;
  };
  export type requestNode_Return = {
    /** Node id for given object. */
    nodeId: NodeId;
  };
  export type setInspectMode_Parameters = {
    /** Set an inspection mode. */
    mode: InspectMode;
    /** A descriptor for the highlight appearance of hovered-over nodes. May be omitted if <code>enabled == false</code>. */
    highlightConfig?: HighlightConfig;
  };
  export type highlightRect_Parameters = {
    /** X coordinate */
    x: number;
    /** Y coordinate */
    y: number;
    /** Rectangle width */
    width: number;
    /** Rectangle height */
    height: number;
    /** The highlight fill color (default: transparent). */
    color?: RGBA;
    /** The highlight outline color (default: transparent). */
    outlineColor?: RGBA;
  };
  export type highlightQuad_Parameters = {
    /** Quad to highlight */
    quad: Quad;
    /** The highlight fill color (default: transparent). */
    color?: RGBA;
    /** The highlight outline color (default: transparent). */
    outlineColor?: RGBA;
  };
  export type highlightNode_Parameters = {
    /** A descriptor for the highlight appearance. */
    highlightConfig: HighlightConfig;
    /** Identifier of the node to highlight. */
    nodeId?: NodeId;
    /** Identifier of the backend node to highlight. */
    backendNodeId?: BackendNodeId;
    /** JavaScript object id of the node to be highlighted. */
    objectId?: Runtime.RemoteObjectId;
  };
  export type highlightFrame_Parameters = {
    /** Identifier of the frame to highlight. */
    frameId: Page.FrameId;
    /** The content box highlight fill color (default: transparent). */
    contentColor?: RGBA;
    /** The content box highlight outline color (default: transparent). */
    contentOutlineColor?: RGBA;
  };
  export type pushNodeByPathToFrontend_Parameters = {
    /** Path to node in the proprietary format. */
    path: string;
  };
  export type pushNodeByPathToFrontend_Return = {
    /** Id of the node for given path. */
    nodeId: NodeId;
  };
  export type pushNodesByBackendIdsToFrontend_Parameters = {
    /** The array of backend node ids. */
    backendNodeIds: BackendNodeId[];
  };
  export type pushNodesByBackendIdsToFrontend_Return = {
    /** The array of ids of pushed nodes that correspond to the backend ids specified in backendNodeIds. */
    nodeIds: NodeId[];
  };
  export type setInspectedNode_Parameters = {
    /** DOM node id to be accessible by means of $x command line API. */
    nodeId: NodeId;
  };
  export type resolveNode_Parameters = {
    /** Id of the node to resolve. */
    nodeId: NodeId;
    /** Symbolic group name that can be used to release multiple objects. */
    objectGroup?: string;
  };
  export type resolveNode_Return = {
    /** JavaScript object wrapper for given node. */
    object: Runtime.RemoteObject;
  };
  export type getAttributes_Parameters = {
    /** Id of the node to retrieve attibutes for. */
    nodeId: NodeId;
  };
  export type getAttributes_Return = {
    /** An interleaved array of node attribute names and values. */
    attributes: string[];
  };
  export type copyTo_Parameters = {
    /** Id of the node to copy. */
    nodeId: NodeId;
    /** Id of the element to drop the copy into. */
    targetNodeId: NodeId;
    /** Drop the copy before this node (if absent, the copy becomes the last child of <code>targetNodeId</code>). */
    insertBeforeNodeId?: NodeId;
  };
  export type copyTo_Return = {
    /** Id of the node clone. */
    nodeId: NodeId;
  };
  export type moveTo_Parameters = {
    /** Id of the node to move. */
    nodeId: NodeId;
    /** Id of the element to drop the moved node into. */
    targetNodeId: NodeId;
    /** Drop node before this one (if absent, the moved node becomes the last child of <code>targetNodeId</code>). */
    insertBeforeNodeId?: NodeId;
  };
  export type moveTo_Return = {
    /** New id of the moved node. */
    nodeId: NodeId;
  };
  export type focus_Parameters = {
    /** Id of the node to focus. */
    nodeId: NodeId;
  };
  export type setFileInputFiles_Parameters = {
    /** Id of the file input node to set files for. */
    nodeId: NodeId;
    /** Array of file paths to set. */
    files: string[];
  };
  export type getBoxModel_Parameters = {
    /** Id of the node to get box model for. */
    nodeId: NodeId;
  };
  export type getBoxModel_Return = {
    /** Box model for the node. */
    model: BoxModel;
  };
  export type getNodeForLocation_Parameters = {
    /** X coordinate. */
    x: number;
    /** Y coordinate. */
    y: number;
  };
  export type getNodeForLocation_Return = {
    /** Id of the node at given coordinates. */
    nodeId: NodeId;
  };
  export type getRelayoutBoundary_Parameters = {
    /** Id of the node. */
    nodeId: NodeId;
  };
  export type getRelayoutBoundary_Return = {
    /** Relayout boundary node id for the given node. */
    nodeId: NodeId;
  };
  export type getHighlightObjectForTest_Parameters = {
    /** Id of the node to get highlight object for. */
    nodeId: NodeId;
  };
  export type getHighlightObjectForTest_Return = {
    /** Highlight data for the node. */
    highlight: any;
  };
}
/** This domain exposes CSS read/write operations. All CSS objects (stylesheets, rules, and styles) have an associated <code>id</code> used in subsequent operations on the related object. Each object type has a specific <code>id</code> structure, and those are not interchangeable between objects of different kinds. CSS objects can be loaded using the <code>get*ForNode()</code> calls (which accept a DOM node id). A client can also discover all the existing stylesheets with the <code>getAllStyleSheets()</code> method (or keeping track of the <code>styleSheetAdded</code>/<code>styleSheetRemoved</code> events) and subsequently load the required stylesheet contents using the <code>getStyleSheet[Text]()</code> methods. */
export class CSS {
  private _mediaQueryResultChanged: CSS.mediaQueryResultChanged_Handler = undefined;
  private _styleSheetChanged: CSS.styleSheetChanged_Handler = undefined;
  private _styleSheetAdded: CSS.styleSheetAdded_Handler = undefined;
  private _styleSheetRemoved: CSS.styleSheetRemoved_Handler = undefined;
  private _layoutEditorChange: CSS.layoutEditorChange_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables the CSS agent for the given page. Clients should not assume that the CSS agent has been enabled until the result of this command is received. */
  enable(): Promise<void> {
    return this._client.send<void>("CSS.enable");
  }
  /** Disables the CSS agent for the given page. */
  disable(): Promise<void> {
    return this._client.send<void>("CSS.disable");
  }
  /** Returns requested styles for a DOM node identified by <code>nodeId</code>. */
  getMatchedStylesForNode(params: CSS.getMatchedStylesForNode_Parameters): Promise<CSS.getMatchedStylesForNode_Return> {
    return this._client.send<CSS.getMatchedStylesForNode_Return>("CSS.getMatchedStylesForNode", params);
  }
  /** Returns the styles defined inline (explicitly in the "style" attribute and implicitly, using DOM attributes) for a DOM node identified by <code>nodeId</code>. */
  getInlineStylesForNode(params: CSS.getInlineStylesForNode_Parameters): Promise<CSS.getInlineStylesForNode_Return> {
    return this._client.send<CSS.getInlineStylesForNode_Return>("CSS.getInlineStylesForNode", params);
  }
  /** Returns the computed style for a DOM node identified by <code>nodeId</code>. */
  getComputedStyleForNode(params: CSS.getComputedStyleForNode_Parameters): Promise<CSS.getComputedStyleForNode_Return> {
    return this._client.send<CSS.getComputedStyleForNode_Return>("CSS.getComputedStyleForNode", params);
  }
  /** Requests information about platform fonts which we used to render child TextNodes in the given node. */
  getPlatformFontsForNode(params: CSS.getPlatformFontsForNode_Parameters): Promise<CSS.getPlatformFontsForNode_Return> {
    return this._client.send<CSS.getPlatformFontsForNode_Return>("CSS.getPlatformFontsForNode", params);
  }
  /** Returns all CSS keyframed animations mtaching this node. */
  getCSSAnimationsForNode(params: CSS.getCSSAnimationsForNode_Parameters): Promise<CSS.getCSSAnimationsForNode_Return> {
    return this._client.send<CSS.getCSSAnimationsForNode_Return>("CSS.getCSSAnimationsForNode", params);
  }
  /** Returns the current textual content and the URL for a stylesheet. */
  getStyleSheetText(params: CSS.getStyleSheetText_Parameters): Promise<CSS.getStyleSheetText_Return> {
    return this._client.send<CSS.getStyleSheetText_Return>("CSS.getStyleSheetText", params);
  }
  /** Sets the new stylesheet text. */
  setStyleSheetText(params: CSS.setStyleSheetText_Parameters): Promise<CSS.setStyleSheetText_Return> {
    return this._client.send<CSS.setStyleSheetText_Return>("CSS.setStyleSheetText", params);
  }
  /** Modifies the rule selector. */
  setRuleSelector(params: CSS.setRuleSelector_Parameters): Promise<CSS.setRuleSelector_Return> {
    return this._client.send<CSS.setRuleSelector_Return>("CSS.setRuleSelector", params);
  }
  /** Modifies the style text. */
  setStyleText(params: CSS.setStyleText_Parameters): Promise<CSS.setStyleText_Return> {
    return this._client.send<CSS.setStyleText_Return>("CSS.setStyleText", params);
  }
  /** Modifies the rule selector. */
  setMediaText(params: CSS.setMediaText_Parameters): Promise<CSS.setMediaText_Return> {
    return this._client.send<CSS.setMediaText_Return>("CSS.setMediaText", params);
  }
  /** Creates a new special "via-inspector" stylesheet in the frame with given <code>frameId</code>. */
  createStyleSheet(params: CSS.createStyleSheet_Parameters): Promise<CSS.createStyleSheet_Return> {
    return this._client.send<CSS.createStyleSheet_Return>("CSS.createStyleSheet", params);
  }
  /** Inserts a new rule with the given <code>ruleText</code> in a stylesheet with given <code>styleSheetId</code>, at the position specified by <code>location</code>. */
  addRule(params: CSS.addRule_Parameters): Promise<CSS.addRule_Return> {
    return this._client.send<CSS.addRule_Return>("CSS.addRule", params);
  }
  /** Ensures that the given node will have specified pseudo-classes whenever its style is computed by the browser. */
  forcePseudoState(params: CSS.forcePseudoState_Parameters): Promise<void> {
    return this._client.send<void>("CSS.forcePseudoState", params);
  }
  /** Returns all media queries parsed by the rendering engine. */
  getMediaQueries(): Promise<CSS.getMediaQueries_Return> {
    return this._client.send<CSS.getMediaQueries_Return>("CSS.getMediaQueries");
  }
  /** Find a rule with the given active property for the given node and set the new value for this property */
  setEffectivePropertyValueForNode(params: CSS.setEffectivePropertyValueForNode_Parameters): Promise<void> {
    return this._client.send<void>("CSS.setEffectivePropertyValueForNode", params);
  }
  getBackgroundColors(params: CSS.getBackgroundColors_Parameters): Promise<CSS.getBackgroundColors_Return> {
    return this._client.send<CSS.getBackgroundColors_Return>("CSS.getBackgroundColors", params);
  }
  /** Fires whenever a MediaQuery result changes (for example, after a browser window has been resized.) The current implementation considers only viewport-dependent media features. */
  get mediaQueryResultChanged(): CSS.mediaQueryResultChanged_Handler {
    return this._mediaQueryResultChanged;
  }
  set mediaQueryResultChanged(handler: CSS.mediaQueryResultChanged_Handler) {
    if (this._mediaQueryResultChanged) {
      this._client.removeListener("CSS.mediaQueryResultChanged", this._mediaQueryResultChanged);
    }
    this._mediaQueryResultChanged = handler;
    if (handler) {
      this._client.on("CSS.mediaQueryResultChanged", handler);
    }
  }
  /** Fired whenever a stylesheet is changed as a result of the client operation. */
  get styleSheetChanged(): CSS.styleSheetChanged_Handler {
    return this._styleSheetChanged;
  }
  set styleSheetChanged(handler: CSS.styleSheetChanged_Handler) {
    if (this._styleSheetChanged) {
      this._client.removeListener("CSS.styleSheetChanged", this._styleSheetChanged);
    }
    this._styleSheetChanged = handler;
    if (handler) {
      this._client.on("CSS.styleSheetChanged", handler);
    }
  }
  /** Fired whenever an active document stylesheet is added. */
  get styleSheetAdded(): CSS.styleSheetAdded_Handler {
    return this._styleSheetAdded;
  }
  set styleSheetAdded(handler: CSS.styleSheetAdded_Handler) {
    if (this._styleSheetAdded) {
      this._client.removeListener("CSS.styleSheetAdded", this._styleSheetAdded);
    }
    this._styleSheetAdded = handler;
    if (handler) {
      this._client.on("CSS.styleSheetAdded", handler);
    }
  }
  /** Fired whenever an active document stylesheet is removed. */
  get styleSheetRemoved(): CSS.styleSheetRemoved_Handler {
    return this._styleSheetRemoved;
  }
  set styleSheetRemoved(handler: CSS.styleSheetRemoved_Handler) {
    if (this._styleSheetRemoved) {
      this._client.removeListener("CSS.styleSheetRemoved", this._styleSheetRemoved);
    }
    this._styleSheetRemoved = handler;
    if (handler) {
      this._client.on("CSS.styleSheetRemoved", handler);
    }
  }
  get layoutEditorChange(): CSS.layoutEditorChange_Handler {
    return this._layoutEditorChange;
  }
  set layoutEditorChange(handler: CSS.layoutEditorChange_Handler) {
    if (this._layoutEditorChange) {
      this._client.removeListener("CSS.layoutEditorChange", this._layoutEditorChange);
    }
    this._layoutEditorChange = handler;
    if (handler) {
      this._client.on("CSS.layoutEditorChange", handler);
    }
  }
}
export namespace CSS {
  export type StyleSheetId = string;
  /** Stylesheet type: "injected" for stylesheets injected via extension, "user-agent" for user-agent stylesheets, "inspector" for stylesheets created by the inspector (i.e. those holding the "via inspector" rules), "regular" for regular stylesheets. */
  export type StyleSheetOrigin = "injected" | "user-agent" | "inspector" | "regular";
  /** CSS rule collection for a single pseudo style. */
  export interface PseudoElementMatches {
    /** Pseudo element type. */
    pseudoType: DOM.PseudoType;
    /** Matches of CSS rules applicable to the pseudo style. */
    matches: RuleMatch[];
  }
  /** Inherited CSS rule collection from ancestor node. */
  export interface InheritedStyleEntry {
    /** The ancestor node's inline style, if any, in the style inheritance chain. */
    inlineStyle?: CSSStyle;
    /** Matches of CSS rules matching the ancestor node in the style inheritance chain. */
    matchedCSSRules: RuleMatch[];
  }
  /** Match data for a CSS rule. */
  export interface RuleMatch {
    /** CSS rule in the match. */
    rule: CSSRule;
    /** Matching selector indices in the rule's selectorList selectors (0-based). */
    matchingSelectors: number[];
  }
  /** Data for a simple selector (these are delimited by commas in a selector list). */
  export interface Value {
    /** Value text. */
    text: string;
    /** Value range in the underlying resource (if available). */
    range?: SourceRange;
  }
  /** Selector list data. */
  export interface SelectorList {
    /** Selectors in the list. */
    selectors: Value[];
    /** Rule selector text. */
    text: string;
  }
  /** CSS stylesheet metainformation. */
  export interface CSSStyleSheetHeader {
    /** The stylesheet identifier. */
    styleSheetId: StyleSheetId;
    /** Owner frame identifier. */
    frameId: Page.FrameId;
    /** Stylesheet resource URL. */
    sourceURL: string;
    /** URL of source map associated with the stylesheet (if any). */
    sourceMapURL?: string;
    /** Stylesheet origin. */
    origin: StyleSheetOrigin;
    /** Stylesheet title. */
    title: string;
    /** The backend id for the owner node of the stylesheet. */
    ownerNode?: DOM.BackendNodeId;
    /** Denotes whether the stylesheet is disabled. */
    disabled: boolean;
    /** Whether the sourceURL field value comes from the sourceURL comment. */
    hasSourceURL?: boolean;
    /** Whether this stylesheet is created for STYLE tag by parser. This flag is not set for document.written STYLE tags. */
    isInline: boolean;
    /** Line offset of the stylesheet within the resource (zero based). */
    startLine: number;
    /** Column offset of the stylesheet within the resource (zero based). */
    startColumn: number;
  }
  /** CSS rule representation. */
  export interface CSSRule {
    /** The css style sheet identifier (absent for user agent stylesheet and user-specified stylesheet rules) this rule came from. */
    styleSheetId?: StyleSheetId;
    /** Rule selector data. */
    selectorList: SelectorList;
    /** Parent stylesheet's origin. */
    origin: StyleSheetOrigin;
    /** Associated style declaration. */
    style: CSSStyle;
    /** Media list array (for rules involving media queries). The array enumerates media queries starting with the innermost one, going outwards. */
    media?: CSSMedia[];
  }
  /** Text range within a resource. All numbers are zero-based. */
  export interface SourceRange {
    /** Start line of range. */
    startLine: number;
    /** Start column of range (inclusive). */
    startColumn: number;
    /** End line of range */
    endLine: number;
    /** End column of range (exclusive). */
    endColumn: number;
  }
  export interface ShorthandEntry {
    /** Shorthand name. */
    name: string;
    /** Shorthand value. */
    value: string;
    /** Whether the property has "!important" annotation (implies <code>false</code> if absent). */
    important?: boolean;
  }
  export interface CSSComputedStyleProperty {
    /** Computed style property name. */
    name: string;
    /** Computed style property value. */
    value: string;
  }
  /** CSS style representation. */
  export interface CSSStyle {
    /** The css style sheet identifier (absent for user agent stylesheet and user-specified stylesheet rules) this rule came from. */
    styleSheetId?: StyleSheetId;
    /** CSS properties in the style. */
    cssProperties: CSSProperty[];
    /** Computed values for all shorthands found in the style. */
    shorthandEntries: ShorthandEntry[];
    /** Style declaration text (if available). */
    cssText?: string;
    /** Style declaration range in the enclosing stylesheet (if available). */
    range?: SourceRange;
  }
  /** CSS property declaration data. */
  export interface CSSProperty {
    /** The property name. */
    name: string;
    /** The property value. */
    value: string;
    /** Whether the property has "!important" annotation (implies <code>false</code> if absent). */
    important?: boolean;
    /** Whether the property is implicit (implies <code>false</code> if absent). */
    implicit?: boolean;
    /** The full property text as specified in the style. */
    text?: string;
    /** Whether the property is understood by the browser (implies <code>true</code> if absent). */
    parsedOk?: boolean;
    /** Whether the property is disabled by the user (present for source-based properties only). */
    disabled?: boolean;
    /** The entire property range in the enclosing style declaration (if available). */
    range?: SourceRange;
  }
  /** CSS media rule descriptor. */
  export interface CSSMedia {
    /** Media query text. */
    text: string;
    /** Source of the media query: "mediaRule" if specified by a @media rule, "importRule" if specified by an @import rule, "linkedSheet" if specified by a "media" attribute in a linked stylesheet's LINK tag, "inlineSheet" if specified by a "media" attribute in an inline stylesheet's STYLE tag. */
    source: "mediaRule" | "importRule" | "linkedSheet" | "inlineSheet";
    /** URL of the document containing the media query description. */
    sourceURL?: string;
    /** The associated rule (@media or @import) header range in the enclosing stylesheet (if available). */
    range?: SourceRange;
    /** Identifier of the stylesheet containing this object (if exists). */
    parentStyleSheetId?: StyleSheetId;
    /** Array of media queries. */
    mediaList?: MediaQuery[];
  }
  /** Media query descriptor. */
  export interface MediaQuery {
    /** Array of media query expressions. */
    expressions: MediaQueryExpression[];
    /** Whether the media query condition is satisfied. */
    active: boolean;
  }
  /** Media query expression descriptor. */
  export interface MediaQueryExpression {
    /** Media query expression value. */
    value: number;
    /** Media query expression units. */
    unit: string;
    /** Media query expression feature. */
    feature: string;
    /** The associated range of the value text in the enclosing stylesheet (if available). */
    valueRange?: SourceRange;
    /** Computed length of media query expression (if applicable). */
    computedLength?: number;
  }
  /** Information about amount of glyphs that were rendered with given font. */
  export interface PlatformFontUsage {
    /** Font's family name reported by platform. */
    familyName: string;
    /** Amount of glyphs that were rendered with this font. */
    glyphCount: number;
  }
  /** CSS keyframes rule representation. */
  export interface CSSKeyframesRule {
    /** Animation name. */
    animationName: Value;
    /** List of keyframes. */
    keyframes: CSSKeyframeRule[];
  }
  /** CSS keyframe rule representation. */
  export interface CSSKeyframeRule {
    /** Associated key text. */
    keyText: Value;
    /** Associated style declaration. */
    style: CSSStyle;
  }
  export type mediaQueryResultChanged_Handler = () => void;
  export type styleSheetChanged_Parameters = {
    styleSheetId: StyleSheetId;
  };
  export type styleSheetChanged_Handler = (params: styleSheetChanged_Parameters) => void;
  export type styleSheetAdded_Parameters = {
    /** Added stylesheet metainfo. */
    header: CSSStyleSheetHeader;
  };
  export type styleSheetAdded_Handler = (params: styleSheetAdded_Parameters) => void;
  export type styleSheetRemoved_Parameters = {
    /** Identifier of the removed stylesheet. */
    styleSheetId: StyleSheetId;
  };
  export type styleSheetRemoved_Handler = (params: styleSheetRemoved_Parameters) => void;
  export type layoutEditorChange_Parameters = {
    /** Identifier of the stylesheet where the modification occurred. */
    styleSheetId: StyleSheetId;
    /** Range where the modification occurred. */
    changeRange: SourceRange;
  };
  export type layoutEditorChange_Handler = (params: layoutEditorChange_Parameters) => void;
  export type getMatchedStylesForNode_Parameters = {
    nodeId: DOM.NodeId;
  };
  export type getMatchedStylesForNode_Return = {
    /** Inline style for the specified DOM node. */
    inlineStyle?: CSSStyle;
    /** Attribute-defined element style (e.g. resulting from "width=20 height=100%"). */
    attributesStyle?: CSSStyle;
    /** CSS rules matching this node, from all applicable stylesheets. */
    matchedCSSRules?: RuleMatch[];
    /** Pseudo style matches for this node. */
    pseudoElements?: PseudoElementMatches[];
    /** A chain of inherited styles (from the immediate node parent up to the DOM tree root). */
    inherited?: InheritedStyleEntry[];
  };
  export type getInlineStylesForNode_Parameters = {
    nodeId: DOM.NodeId;
  };
  export type getInlineStylesForNode_Return = {
    /** Inline style for the specified DOM node. */
    inlineStyle?: CSSStyle;
    /** Attribute-defined element style (e.g. resulting from "width=20 height=100%"). */
    attributesStyle?: CSSStyle;
  };
  export type getComputedStyleForNode_Parameters = {
    nodeId: DOM.NodeId;
  };
  export type getComputedStyleForNode_Return = {
    /** Computed style for the specified DOM node. */
    computedStyle: CSSComputedStyleProperty[];
  };
  export type getPlatformFontsForNode_Parameters = {
    nodeId: DOM.NodeId;
  };
  export type getPlatformFontsForNode_Return = {
    /** Usage statistics for every employed platform font. */
    fonts: PlatformFontUsage[];
  };
  export type getCSSAnimationsForNode_Parameters = {
    nodeId: DOM.NodeId;
  };
  export type getCSSAnimationsForNode_Return = {
    /** A list of CSS keyframed animations matching this node. */
    cssKeyframesRules?: CSSKeyframesRule[];
  };
  export type getStyleSheetText_Parameters = {
    styleSheetId: StyleSheetId;
  };
  export type getStyleSheetText_Return = {
    /** The stylesheet text. */
    text: string;
  };
  export type setStyleSheetText_Parameters = {
    styleSheetId: StyleSheetId;
    text: string;
  };
  export type setStyleSheetText_Return = {
    /** URL of source map associated with script (if any). */
    sourceMapURL?: string;
  };
  export type setRuleSelector_Parameters = {
    styleSheetId: StyleSheetId;
    range: SourceRange;
    selector: string;
  };
  export type setRuleSelector_Return = {
    /** The resulting selector list after modification. */
    selectorList: SelectorList;
  };
  export type setStyleText_Parameters = {
    styleSheetId: StyleSheetId;
    range: SourceRange;
    text: string;
  };
  export type setStyleText_Return = {
    /** The resulting style after the selector modification. */
    style: CSSStyle;
  };
  export type setMediaText_Parameters = {
    styleSheetId: StyleSheetId;
    range: SourceRange;
    text: string;
  };
  export type setMediaText_Return = {
    /** The resulting CSS media rule after modification. */
    media: CSSMedia;
  };
  export type createStyleSheet_Parameters = {
    /** Identifier of the frame where "via-inspector" stylesheet should be created. */
    frameId: Page.FrameId;
  };
  export type createStyleSheet_Return = {
    /** Identifier of the created "via-inspector" stylesheet. */
    styleSheetId: StyleSheetId;
  };
  export type addRule_Parameters = {
    /** The css style sheet identifier where a new rule should be inserted. */
    styleSheetId: StyleSheetId;
    /** The text of a new rule. */
    ruleText: string;
    /** Text position of a new rule in the target style sheet. */
    location: SourceRange;
  };
  export type addRule_Return = {
    /** The newly created rule. */
    rule: CSSRule;
  };
  export type forcePseudoState_Parameters = {
    /** The element id for which to force the pseudo state. */
    nodeId: DOM.NodeId;
    /** Element pseudo classes to force when computing the element's style. */
    forcedPseudoClasses: "active" | "focus" | "hover" | "visited"[];
  };
  export type getMediaQueries_Return = {
    medias: CSSMedia[];
  };
  export type setEffectivePropertyValueForNode_Parameters = {
    /** The element id for which to set property. */
    nodeId: DOM.NodeId;
    propertyName: string;
    value: string;
  };
  export type getBackgroundColors_Parameters = {
    /** Id of the node to get background colors for. */
    nodeId: DOM.NodeId;
  };
  export type getBackgroundColors_Return = {
    /** The range of background colors behind this element, if it contains any visible text. If no visible text is present, this will be undefined. In the case of a flat background color, this will consist of simply that color. In the case of a gradient, this will consist of each of the color stops. For anything more complicated, this will be an empty array. Images will be ignored (as if the image had failed to load). */
    backgroundColors?: string[];
  };
}
/** Input/Output operations for streams produced by DevTools. */
export class IO {
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Read a chunk of the stream */
  read(params: IO.read_Parameters): Promise<IO.read_Return> {
    return this._client.send<IO.read_Return>("IO.read", params);
  }
  /** Close the stream, discard any temporary backing storage. */
  close(params: IO.close_Parameters): Promise<void> {
    return this._client.send<void>("IO.close", params);
  }
}
export namespace IO {
  export type StreamHandle = string;
  export type read_Parameters = {
    /** Handle of the stream to read. */
    handle: StreamHandle;
    /** Seek to the specified offset before reading (if not specificed, proceed with offset following the last read). */
    offset?: number;
    /** Maximum number of bytes to read (left upon the agent discretion if not specified). */
    size?: number;
  };
  export type read_Return = {
    /** Data that were read. */
    data: string;
    /** Set if the end-of-file condition occured while reading. */
    eof: boolean;
  };
  export type close_Parameters = {
    /** Handle of the stream to close. */
    handle: StreamHandle;
  };
}
/** Timeline domain is deprecated. Please use Tracing instead. */
export class Timeline {
  private _eventRecorded: Timeline.eventRecorded_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Deprecated. */
  enable(): Promise<void> {
    return this._client.send<void>("Timeline.enable");
  }
  /** Deprecated. */
  disable(): Promise<void> {
    return this._client.send<void>("Timeline.disable");
  }
  /** Deprecated. */
  start(params: Timeline.start_Parameters): Promise<void> {
    return this._client.send<void>("Timeline.start", params);
  }
  /** Deprecated. */
  stop(): Promise<void> {
    return this._client.send<void>("Timeline.stop");
  }
  /** Deprecated. */
  get eventRecorded(): Timeline.eventRecorded_Handler {
    return this._eventRecorded;
  }
  set eventRecorded(handler: Timeline.eventRecorded_Handler) {
    if (this._eventRecorded) {
      this._client.removeListener("Timeline.eventRecorded", this._eventRecorded);
    }
    this._eventRecorded = handler;
    if (handler) {
      this._client.on("Timeline.eventRecorded", handler);
    }
  }
}
export namespace Timeline {
  /** Timeline record contains information about the recorded activity. */
  export interface TimelineEvent {
    /** Event type. */
    type: string;
    /** Event data. */
    data: any;
    /** Start time. */
    startTime: number;
    /** End time. */
    endTime?: number;
    /** Nested records. */
    children?: TimelineEvent[];
    /** If present, identifies the thread that produced the event. */
    thread?: string;
    /** Stack trace. */
    stackTrace?: Console.StackTrace;
    /** Unique identifier of the frame within the page that the event relates to. */
    frameId?: string;
  }
  export type eventRecorded_Parameters = {
    /** Timeline event record data. */
    record: TimelineEvent;
  };
  export type eventRecorded_Handler = (params: eventRecorded_Parameters) => void;
  export type start_Parameters = {
    /** Samples JavaScript stack traces up to <code>maxCallStackDepth</code>, defaults to 5. */
    maxCallStackDepth?: number;
    /** Whether instrumentation events should be buffered and returned upon <code>stop</code> call. */
    bufferEvents?: boolean;
    /** Coma separated event types to issue although bufferEvents is set. */
    liveEvents?: string;
    /** Whether counters data should be included into timeline events. */
    includeCounters?: boolean;
    /** Whether events from GPU process should be collected. */
    includeGPUEvents?: boolean;
  };
}
/** Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing breakpoints, stepping through execution, exploring stack traces, etc. */
export class Debugger {
  private _globalObjectCleared: Debugger.globalObjectCleared_Handler = undefined;
  private _scriptParsed: Debugger.scriptParsed_Handler = undefined;
  private _scriptFailedToParse: Debugger.scriptFailedToParse_Handler = undefined;
  private _breakpointResolved: Debugger.breakpointResolved_Handler = undefined;
  private _paused: Debugger.paused_Handler = undefined;
  private _resumed: Debugger.resumed_Handler = undefined;
  private _promiseUpdated: Debugger.promiseUpdated_Handler = undefined;
  private _asyncOperationStarted: Debugger.asyncOperationStarted_Handler = undefined;
  private _asyncOperationCompleted: Debugger.asyncOperationCompleted_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables debugger for the given page. Clients should not assume that the debugging has been enabled until the result for this command is received. */
  enable(): Promise<void> {
    return this._client.send<void>("Debugger.enable");
  }
  /** Disables debugger for given page. */
  disable(): Promise<void> {
    return this._client.send<void>("Debugger.disable");
  }
  /** Activates / deactivates all breakpoints on the page. */
  setBreakpointsActive(params: Debugger.setBreakpointsActive_Parameters): Promise<void> {
    return this._client.send<void>("Debugger.setBreakpointsActive", params);
  }
  /** Makes page not interrupt on any pauses (breakpoint, exception, dom exception etc). */
  setSkipAllPauses(params: Debugger.setSkipAllPauses_Parameters): Promise<void> {
    return this._client.send<void>("Debugger.setSkipAllPauses", params);
  }
  /** Sets JavaScript breakpoint at given location specified either by URL or URL regex. Once this command is issued, all existing parsed scripts will have breakpoints resolved and returned in <code>locations</code> property. Further matching script parsing will result in subsequent <code>breakpointResolved</code> events issued. This logical breakpoint will survive page reloads. */
  setBreakpointByUrl(params: Debugger.setBreakpointByUrl_Parameters): Promise<Debugger.setBreakpointByUrl_Return> {
    return this._client.send<Debugger.setBreakpointByUrl_Return>("Debugger.setBreakpointByUrl", params);
  }
  /** Sets JavaScript breakpoint at a given location. */
  setBreakpoint(params: Debugger.setBreakpoint_Parameters): Promise<Debugger.setBreakpoint_Return> {
    return this._client.send<Debugger.setBreakpoint_Return>("Debugger.setBreakpoint", params);
  }
  /** Removes JavaScript breakpoint. */
  removeBreakpoint(params: Debugger.removeBreakpoint_Parameters): Promise<void> {
    return this._client.send<void>("Debugger.removeBreakpoint", params);
  }
  /** Continues execution until specific location is reached. */
  continueToLocation(params: Debugger.continueToLocation_Parameters): Promise<void> {
    return this._client.send<void>("Debugger.continueToLocation", params);
  }
  /** Steps over the statement. */
  stepOver(): Promise<void> {
    return this._client.send<void>("Debugger.stepOver");
  }
  /** Steps into the function call. */
  stepInto(): Promise<void> {
    return this._client.send<void>("Debugger.stepInto");
  }
  /** Steps out of the function call. */
  stepOut(): Promise<void> {
    return this._client.send<void>("Debugger.stepOut");
  }
  /** Stops on the next JavaScript statement. */
  pause(): Promise<void> {
    return this._client.send<void>("Debugger.pause");
  }
  /** Resumes JavaScript execution. */
  resume(): Promise<void> {
    return this._client.send<void>("Debugger.resume");
  }
  /** Steps into the first async operation handler that was scheduled by or after the current statement. */
  stepIntoAsync(): Promise<void> {
    return this._client.send<void>("Debugger.stepIntoAsync");
  }
  /** Searches for given string in script content. */
  searchInContent(params: Debugger.searchInContent_Parameters): Promise<Debugger.searchInContent_Return> {
    return this._client.send<Debugger.searchInContent_Return>("Debugger.searchInContent", params);
  }
  /** Always returns true. */
  canSetScriptSource(): Promise<Debugger.canSetScriptSource_Return> {
    return this._client.send<Debugger.canSetScriptSource_Return>("Debugger.canSetScriptSource");
  }
  /** Edits JavaScript source live. */
  setScriptSource(params: Debugger.setScriptSource_Parameters): Promise<Debugger.setScriptSource_Return> {
    return this._client.send<Debugger.setScriptSource_Return>("Debugger.setScriptSource", params);
  }
  /** Restarts particular call frame from the beginning. */
  restartFrame(params: Debugger.restartFrame_Parameters): Promise<Debugger.restartFrame_Return> {
    return this._client.send<Debugger.restartFrame_Return>("Debugger.restartFrame", params);
  }
  /** Returns source for the script with given id. */
  getScriptSource(params: Debugger.getScriptSource_Parameters): Promise<Debugger.getScriptSource_Return> {
    return this._client.send<Debugger.getScriptSource_Return>("Debugger.getScriptSource", params);
  }
  /** Returns detailed information on given function. */
  getFunctionDetails(params: Debugger.getFunctionDetails_Parameters): Promise<Debugger.getFunctionDetails_Return> {
    return this._client.send<Debugger.getFunctionDetails_Return>("Debugger.getFunctionDetails", params);
  }
  /** Returns detailed information on given generator object. */
  getGeneratorObjectDetails(params: Debugger.getGeneratorObjectDetails_Parameters): Promise<Debugger.getGeneratorObjectDetails_Return> {
    return this._client.send<Debugger.getGeneratorObjectDetails_Return>("Debugger.getGeneratorObjectDetails", params);
  }
  /** Returns entries of given collection. */
  getCollectionEntries(params: Debugger.getCollectionEntries_Parameters): Promise<Debugger.getCollectionEntries_Return> {
    return this._client.send<Debugger.getCollectionEntries_Return>("Debugger.getCollectionEntries", params);
  }
  /** Defines pause on exceptions state. Can be set to stop on all exceptions, uncaught exceptions or no exceptions. Initial pause on exceptions state is <code>none</code>. */
  setPauseOnExceptions(params: Debugger.setPauseOnExceptions_Parameters): Promise<void> {
    return this._client.send<void>("Debugger.setPauseOnExceptions", params);
  }
  /** Evaluates expression on a given call frame. */
  evaluateOnCallFrame(params: Debugger.evaluateOnCallFrame_Parameters): Promise<Debugger.evaluateOnCallFrame_Return> {
    return this._client.send<Debugger.evaluateOnCallFrame_Return>("Debugger.evaluateOnCallFrame", params);
  }
  /** Compiles expression. */
  compileScript(params: Debugger.compileScript_Parameters): Promise<Debugger.compileScript_Return> {
    return this._client.send<Debugger.compileScript_Return>("Debugger.compileScript", params);
  }
  /** Runs script with given id in a given context. */
  runScript(params: Debugger.runScript_Parameters): Promise<Debugger.runScript_Return> {
    return this._client.send<Debugger.runScript_Return>("Debugger.runScript", params);
  }
  /** Changes value of variable in a callframe or a closure. Either callframe or function must be specified. Object-based scopes are not supported and must be mutated manually. */
  setVariableValue(params: Debugger.setVariableValue_Parameters): Promise<void> {
    return this._client.send<void>("Debugger.setVariableValue", params);
  }
  /** Lists all positions where step-in is possible for a current statement in a specified call frame */
  getStepInPositions(params: Debugger.getStepInPositions_Parameters): Promise<Debugger.getStepInPositions_Return> {
    return this._client.send<Debugger.getStepInPositions_Return>("Debugger.getStepInPositions", params);
  }
  /** Returns call stack including variables changed since VM was paused. VM must be paused. */
  getBacktrace(): Promise<Debugger.getBacktrace_Return> {
    return this._client.send<Debugger.getBacktrace_Return>("Debugger.getBacktrace");
  }
  /** Makes backend skip steps in the sources with names matching given pattern. VM will try leave blacklisted scripts by performing 'step in' several times, finally resorting to 'step out' if unsuccessful. */
  skipStackFrames(params: Debugger.skipStackFrames_Parameters): Promise<void> {
    return this._client.send<void>("Debugger.skipStackFrames", params);
  }
  /** Enables or disables async call stacks tracking. */
  setAsyncCallStackDepth(params: Debugger.setAsyncCallStackDepth_Parameters): Promise<void> {
    return this._client.send<void>("Debugger.setAsyncCallStackDepth", params);
  }
  /** Enables promise tracking, information about <code>Promise</code>s created or updated will now be stored on the backend. */
  enablePromiseTracker(params: Debugger.enablePromiseTracker_Parameters): Promise<void> {
    return this._client.send<void>("Debugger.enablePromiseTracker", params);
  }
  /** Disables promise tracking. */
  disablePromiseTracker(): Promise<void> {
    return this._client.send<void>("Debugger.disablePromiseTracker");
  }
  /** Returns <code>Promise</code> with specified ID. */
  getPromiseById(params: Debugger.getPromiseById_Parameters): Promise<Debugger.getPromiseById_Return> {
    return this._client.send<Debugger.getPromiseById_Return>("Debugger.getPromiseById", params);
  }
  /** Fires pending <code>asyncOperationStarted</code> events (if any), as if a debugger stepping session has just been started. */
  flushAsyncOperationEvents(): Promise<void> {
    return this._client.send<void>("Debugger.flushAsyncOperationEvents");
  }
  /** Sets breakpoint on AsyncOperation callback handler. */
  setAsyncOperationBreakpoint(params: Debugger.setAsyncOperationBreakpoint_Parameters): Promise<void> {
    return this._client.send<void>("Debugger.setAsyncOperationBreakpoint", params);
  }
  /** Removes AsyncOperation breakpoint. */
  removeAsyncOperationBreakpoint(params: Debugger.removeAsyncOperationBreakpoint_Parameters): Promise<void> {
    return this._client.send<void>("Debugger.removeAsyncOperationBreakpoint", params);
  }
  /** Called when global has been cleared and debugger client should reset its state. Happens upon navigation or reload. */
  get globalObjectCleared(): Debugger.globalObjectCleared_Handler {
    return this._globalObjectCleared;
  }
  set globalObjectCleared(handler: Debugger.globalObjectCleared_Handler) {
    if (this._globalObjectCleared) {
      this._client.removeListener("Debugger.globalObjectCleared", this._globalObjectCleared);
    }
    this._globalObjectCleared = handler;
    if (handler) {
      this._client.on("Debugger.globalObjectCleared", handler);
    }
  }
  /** Fired when virtual machine parses script. This event is also fired for all known and uncollected scripts upon enabling debugger. */
  get scriptParsed(): Debugger.scriptParsed_Handler {
    return this._scriptParsed;
  }
  set scriptParsed(handler: Debugger.scriptParsed_Handler) {
    if (this._scriptParsed) {
      this._client.removeListener("Debugger.scriptParsed", this._scriptParsed);
    }
    this._scriptParsed = handler;
    if (handler) {
      this._client.on("Debugger.scriptParsed", handler);
    }
  }
  /** Fired when virtual machine fails to parse the script. */
  get scriptFailedToParse(): Debugger.scriptFailedToParse_Handler {
    return this._scriptFailedToParse;
  }
  set scriptFailedToParse(handler: Debugger.scriptFailedToParse_Handler) {
    if (this._scriptFailedToParse) {
      this._client.removeListener("Debugger.scriptFailedToParse", this._scriptFailedToParse);
    }
    this._scriptFailedToParse = handler;
    if (handler) {
      this._client.on("Debugger.scriptFailedToParse", handler);
    }
  }
  /** Fired when breakpoint is resolved to an actual script and location. */
  get breakpointResolved(): Debugger.breakpointResolved_Handler {
    return this._breakpointResolved;
  }
  set breakpointResolved(handler: Debugger.breakpointResolved_Handler) {
    if (this._breakpointResolved) {
      this._client.removeListener("Debugger.breakpointResolved", this._breakpointResolved);
    }
    this._breakpointResolved = handler;
    if (handler) {
      this._client.on("Debugger.breakpointResolved", handler);
    }
  }
  /** Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria. */
  get paused(): Debugger.paused_Handler {
    return this._paused;
  }
  set paused(handler: Debugger.paused_Handler) {
    if (this._paused) {
      this._client.removeListener("Debugger.paused", this._paused);
    }
    this._paused = handler;
    if (handler) {
      this._client.on("Debugger.paused", handler);
    }
  }
  /** Fired when the virtual machine resumed execution. */
  get resumed(): Debugger.resumed_Handler {
    return this._resumed;
  }
  set resumed(handler: Debugger.resumed_Handler) {
    if (this._resumed) {
      this._client.removeListener("Debugger.resumed", this._resumed);
    }
    this._resumed = handler;
    if (handler) {
      this._client.on("Debugger.resumed", handler);
    }
  }
  /** Fired when a <code>Promise</code> is created, updated or garbage collected. */
  get promiseUpdated(): Debugger.promiseUpdated_Handler {
    return this._promiseUpdated;
  }
  set promiseUpdated(handler: Debugger.promiseUpdated_Handler) {
    if (this._promiseUpdated) {
      this._client.removeListener("Debugger.promiseUpdated", this._promiseUpdated);
    }
    this._promiseUpdated = handler;
    if (handler) {
      this._client.on("Debugger.promiseUpdated", handler);
    }
  }
  /** Fired when an async operation is scheduled (while in a debugger stepping session). */
  get asyncOperationStarted(): Debugger.asyncOperationStarted_Handler {
    return this._asyncOperationStarted;
  }
  set asyncOperationStarted(handler: Debugger.asyncOperationStarted_Handler) {
    if (this._asyncOperationStarted) {
      this._client.removeListener("Debugger.asyncOperationStarted", this._asyncOperationStarted);
    }
    this._asyncOperationStarted = handler;
    if (handler) {
      this._client.on("Debugger.asyncOperationStarted", handler);
    }
  }
  /** Fired when an async operation is completed (while in a debugger stepping session). */
  get asyncOperationCompleted(): Debugger.asyncOperationCompleted_Handler {
    return this._asyncOperationCompleted;
  }
  set asyncOperationCompleted(handler: Debugger.asyncOperationCompleted_Handler) {
    if (this._asyncOperationCompleted) {
      this._client.removeListener("Debugger.asyncOperationCompleted", this._asyncOperationCompleted);
    }
    this._asyncOperationCompleted = handler;
    if (handler) {
      this._client.on("Debugger.asyncOperationCompleted", handler);
    }
  }
}
export namespace Debugger {
  /** Breakpoint identifier. */
  export type BreakpointId = string;
  /** Unique script identifier. */
  export type ScriptId = string;
  /** Call frame identifier. */
  export type CallFrameId = string;
  /** Location in the source code. */
  export interface Location {
    /** Script identifier as reported in the <code>Debugger.scriptParsed</code>. */
    scriptId: ScriptId;
    /** Line number in the script (0-based). */
    lineNumber: number;
    /** Column number in the script (0-based). */
    columnNumber?: number;
  }
  /** Information about the function. */
  export interface FunctionDetails {
    /** Location of the function, none for native functions. */
    location?: Location;
    /** Name of the function. */
    functionName: string;
    /** Whether this is a generator function. */
    isGenerator: boolean;
    /** Scope chain for this closure. */
    scopeChain?: Scope[];
  }
  /** Information about the generator object. */
  export interface GeneratorObjectDetails {
    /** Generator function. */
    function: Runtime.RemoteObject;
    /** Name of the generator function. */
    functionName: string;
    /** Current generator object status. */
    status: "running" | "suspended" | "closed";
    /** If suspended, location where generator function was suspended (e.g. location of the last 'yield'). Otherwise, location of the generator function. */
    location?: Location;
  }
  /** Collection entry. */
  export interface CollectionEntry {
    /** Entry key of a map-like collection, otherwise not provided. */
    key?: Runtime.RemoteObject;
    /** Entry value. */
    value: Runtime.RemoteObject;
  }
  /** JavaScript call frame. Array of call frames form the call stack. */
  export interface CallFrame {
    /** Call frame identifier. This identifier is only valid while the virtual machine is paused. */
    callFrameId: CallFrameId;
    /** Name of the JavaScript function called on this call frame. */
    functionName: string;
    /** Location in the source code. */
    functionLocation?: Location;
    /** Location in the source code. */
    location: Location;
    /** Scope chain for this call frame. */
    scopeChain: Scope[];
    /** <code>this</code> object for this call frame. */
    this: Runtime.RemoteObject;
    /** The value being returned, if the function is at return point. */
    returnValue?: Runtime.RemoteObject;
  }
  /** JavaScript call stack, including async stack traces. */
  export interface StackTrace {
    /** Call frames of the stack trace. */
    callFrames: CallFrame[];
    /** String label of this stack trace. For async traces this may be a name of the function that initiated the async call. */
    description?: string;
    /** Async stack trace, if any. */
    asyncStackTrace?: StackTrace;
  }
  /** Scope description. */
  export interface Scope {
    /** Scope type. */
    type: "global" | "local" | "with" | "closure" | "catch" | "block" | "script";
    /** Object representing the scope. For <code>global</code> and <code>with</code> scopes it represents the actual object; for the rest of the scopes, it is artificial transient object enumerating scope variables as its properties. */
    object: Runtime.RemoteObject;
    name?: string;
  }
  /** Detailed information on exception (or error) that was thrown during script compilation or execution. */
  export interface ExceptionDetails {
    /** Exception text. */
    text: string;
    /** URL of the message origin. */
    url?: string;
    /** Script ID of the message origin. */
    scriptId?: string;
    /** Line number in the resource that generated this message. */
    line?: number;
    /** Column number in the resource that generated this message. */
    column?: number;
    /** JavaScript stack trace for assertions and error messages. */
    stackTrace?: Console.StackTrace;
  }
  /** Error data for setScriptSource command. compileError is a case type for uncompilable script source error. */
  export interface SetScriptSourceError {
    compileError?: { message: string; lineNumber: number; columnNumber: number; };
  }
  /** Information about the promise. All fields but id are optional and if present they reflect the new state of the property on the promise with given id. */
  export interface PromiseDetails {
    /** Unique id of the promise. */
    id: number;
    /** Status of the promise. */
    status?: "pending" | "resolved" | "rejected";
    /** Id of the parent promise. */
    parentId?: number;
    /** Top call frame on promise creation. */
    callFrame?: Console.CallFrame;
    /** Creation time of the promise. */
    creationTime?: number;
    /** Settlement time of the promise. */
    settlementTime?: number;
    /** JavaScript stack trace on promise creation. */
    creationStack?: Console.StackTrace;
    /** JavaScript asynchronous stack trace on promise creation, if available. */
    asyncCreationStack?: Console.AsyncStackTrace;
    /** JavaScript stack trace on promise settlement. */
    settlementStack?: Console.StackTrace;
    /** JavaScript asynchronous stack trace on promise settlement, if available. */
    asyncSettlementStack?: Console.AsyncStackTrace;
  }
  /** Information about the async operation. */
  export interface AsyncOperation {
    /** Unique id of the async operation. */
    id: number;
    /** String description of the async operation. */
    description: string;
    /** Stack trace where async operation was scheduled. */
    stackTrace?: Console.StackTrace;
    /** Asynchronous stack trace where async operation was scheduled, if available. */
    asyncStackTrace?: Console.AsyncStackTrace;
  }
  /** Search match for resource. */
  export interface SearchMatch {
    /** Line number in resource content. */
    lineNumber: number;
    /** Line with match content. */
    lineContent: string;
  }
  export type globalObjectCleared_Handler = () => void;
  export type scriptParsed_Parameters = {
    /** Identifier of the script parsed. */
    scriptId: ScriptId;
    /** URL or name of the script parsed (if any). */
    url: string;
    /** Line offset of the script within the resource with given URL (for script tags). */
    startLine: number;
    /** Column offset of the script within the resource with given URL. */
    startColumn: number;
    /** Last line of the script. */
    endLine: number;
    /** Length of the last line of the script. */
    endColumn: number;
    /** Specifies script creation context. */
    executionContextId: Runtime.ExecutionContextId;
    /** Determines whether this script is a user extension script. */
    isContentScript?: boolean;
    /** Determines whether this script is an internal script. */
    isInternalScript?: boolean;
    /** True, if this script is generated as a result of the live edit operation. */
    isLiveEdit?: boolean;
    /** URL of source map associated with script (if any). */
    sourceMapURL?: string;
    /** True, if this script has sourceURL. */
    hasSourceURL?: boolean;
  };
  export type scriptParsed_Handler = (params: scriptParsed_Parameters) => void;
  export type scriptFailedToParse_Parameters = {
    /** Identifier of the script parsed. */
    scriptId: ScriptId;
    /** URL or name of the script parsed (if any). */
    url: string;
    /** Line offset of the script within the resource with given URL (for script tags). */
    startLine: number;
    /** Column offset of the script within the resource with given URL. */
    startColumn: number;
    /** Last line of the script. */
    endLine: number;
    /** Length of the last line of the script. */
    endColumn: number;
    /** Specifies script creation context. */
    executionContextId: Runtime.ExecutionContextId;
    /** Determines whether this script is a user extension script. */
    isContentScript?: boolean;
    /** Determines whether this script is an internal script. */
    isInternalScript?: boolean;
    /** URL of source map associated with script (if any). */
    sourceMapURL?: string;
    /** True, if this script has sourceURL. */
    hasSourceURL?: boolean;
  };
  export type scriptFailedToParse_Handler = (params: scriptFailedToParse_Parameters) => void;
  export type breakpointResolved_Parameters = {
    /** Breakpoint unique identifier. */
    breakpointId: BreakpointId;
    /** Actual breakpoint location. */
    location: Location;
  };
  export type breakpointResolved_Handler = (params: breakpointResolved_Parameters) => void;
  export type paused_Parameters = {
    /** Call stack the virtual machine stopped on. */
    callFrames: CallFrame[];
    /** Pause reason. */
    reason: "XHR" | "DOM" | "EventListener" | "exception" | "assert" | "CSPViolation" | "debugCommand" | "promiseRejection" | "AsyncOperation" | "other";
    /** Object containing break-specific auxiliary properties. */
    data?: any;
    /** Hit breakpoints IDs */
    hitBreakpoints?: string[];
    /** Async stack trace, if any. */
    asyncStackTrace?: StackTrace;
  };
  export type paused_Handler = (params: paused_Parameters) => void;
  export type resumed_Handler = () => void;
  export type promiseUpdated_Parameters = {
    /** Type of the event. */
    eventType: "new" | "update" | "gc";
    /** Information about the updated <code>Promise</code>. */
    promise: PromiseDetails;
  };
  export type promiseUpdated_Handler = (params: promiseUpdated_Parameters) => void;
  export type asyncOperationStarted_Parameters = {
    /** Information about the async operation. */
    operation: AsyncOperation;
  };
  export type asyncOperationStarted_Handler = (params: asyncOperationStarted_Parameters) => void;
  export type asyncOperationCompleted_Parameters = {
    /** ID of the async operation that was completed. */
    id: number;
  };
  export type asyncOperationCompleted_Handler = (params: asyncOperationCompleted_Parameters) => void;
  export type setBreakpointsActive_Parameters = {
    /** New value for breakpoints active state. */
    active: boolean;
  };
  export type setSkipAllPauses_Parameters = {
    /** New value for skip pauses state. */
    skipped: boolean;
  };
  export type setBreakpointByUrl_Parameters = {
    /** Line number to set breakpoint at. */
    lineNumber: number;
    /** URL of the resources to set breakpoint on. */
    url?: string;
    /** Regex pattern for the URLs of the resources to set breakpoints on. Either <code>url</code> or <code>urlRegex</code> must be specified. */
    urlRegex?: string;
    /** Offset in the line to set breakpoint at. */
    columnNumber?: number;
    /** Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true. */
    condition?: string;
  };
  export type setBreakpointByUrl_Return = {
    /** Id of the created breakpoint for further reference. */
    breakpointId: BreakpointId;
    /** List of the locations this breakpoint resolved into upon addition. */
    locations: Location[];
  };
  export type setBreakpoint_Parameters = {
    /** Location to set breakpoint in. */
    location: Location;
    /** Expression to use as a breakpoint condition. When specified, debugger will only stop on the breakpoint if this expression evaluates to true. */
    condition?: string;
  };
  export type setBreakpoint_Return = {
    /** Id of the created breakpoint for further reference. */
    breakpointId: BreakpointId;
    /** Location this breakpoint resolved into. */
    actualLocation: Location;
  };
  export type removeBreakpoint_Parameters = {
    breakpointId: BreakpointId;
  };
  export type continueToLocation_Parameters = {
    /** Location to continue to. */
    location: Location;
    /** Allows breakpoints at the intemediate positions inside statements. */
    interstatementLocation?: boolean;
  };
  export type searchInContent_Parameters = {
    /** Id of the script to search in. */
    scriptId: ScriptId;
    /** String to search for. */
    query: string;
    /** If true, search is case sensitive. */
    caseSensitive?: boolean;
    /** If true, treats string parameter as regex. */
    isRegex?: boolean;
  };
  export type searchInContent_Return = {
    /** List of search matches. */
    result: SearchMatch[];
  };
  export type canSetScriptSource_Return = {
    /** True if <code>setScriptSource</code> is supported. */
    result: boolean;
  };
  export type setScriptSource_Parameters = {
    /** Id of the script to edit. */
    scriptId: ScriptId;
    /** New content of the script. */
    scriptSource: string;
    /**  If true the change will not actually be applied. Preview mode may be used to get result description without actually modifying the code. */
    preview?: boolean;
  };
  export type setScriptSource_Return = {
    /** New stack trace in case editing has happened while VM was stopped. */
    callFrames?: CallFrame[];
    /** Whether current call stack  was modified after applying the changes. */
    stackChanged?: boolean;
    /** Async stack trace, if any. */
    asyncStackTrace?: StackTrace;
  };
  export type restartFrame_Parameters = {
    /** Call frame identifier to evaluate on. */
    callFrameId: CallFrameId;
  };
  export type restartFrame_Return = {
    /** New stack trace. */
    callFrames: CallFrame[];
    /** Async stack trace, if any. */
    asyncStackTrace?: StackTrace;
  };
  export type getScriptSource_Parameters = {
    /** Id of the script to get source for. */
    scriptId: ScriptId;
  };
  export type getScriptSource_Return = {
    /** Script source. */
    scriptSource: string;
  };
  export type getFunctionDetails_Parameters = {
    /** Id of the function to get details for. */
    functionId: Runtime.RemoteObjectId;
  };
  export type getFunctionDetails_Return = {
    /** Information about the function. */
    details: FunctionDetails;
  };
  export type getGeneratorObjectDetails_Parameters = {
    /** Id of the generator object to get details for. */
    objectId: Runtime.RemoteObjectId;
  };
  export type getGeneratorObjectDetails_Return = {
    /** Information about the generator object. */
    details: GeneratorObjectDetails;
  };
  export type getCollectionEntries_Parameters = {
    /** Id of the collection to get entries for. */
    objectId: Runtime.RemoteObjectId;
  };
  export type getCollectionEntries_Return = {
    /** Array of collection entries. */
    entries: CollectionEntry[];
  };
  export type setPauseOnExceptions_Parameters = {
    /** Pause on exceptions mode. */
    state: "none" | "uncaught" | "all";
  };
  export type evaluateOnCallFrame_Parameters = {
    /** Call frame identifier to evaluate on. */
    callFrameId: CallFrameId;
    /** Expression to evaluate. */
    expression: string;
    /** String object group name to put result into (allows rapid releasing resulting object handles using <code>releaseObjectGroup</code>). */
    objectGroup?: string;
    /** Specifies whether command line API should be available to the evaluated expression, defaults to false. */
    includeCommandLineAPI?: boolean;
    /** Specifies whether evaluation should stop on exceptions and mute console. Overrides setPauseOnException state. */
    doNotPauseOnExceptionsAndMuteConsole?: boolean;
    /** Whether the result is expected to be a JSON object that should be sent by value. */
    returnByValue?: boolean;
    /** Whether preview should be generated for the result. */
    generatePreview?: boolean;
  };
  export type evaluateOnCallFrame_Return = {
    /** Object wrapper for the evaluation result. */
    result: Runtime.RemoteObject;
    /** True if the result was thrown during the evaluation. */
    wasThrown?: boolean;
    /** Exception details. */
    exceptionDetails?: ExceptionDetails;
  };
  export type compileScript_Parameters = {
    /** Expression to compile. */
    expression: string;
    /** Source url to be set for the script. */
    sourceURL: string;
    /** Specifies whether the compiled script should be persisted. */
    persistScript: boolean;
    /** Specifies in which isolated context to perform script run. Each content script lives in an isolated context and this parameter is used to specify one of those contexts. */
    executionContextId: Runtime.ExecutionContextId;
  };
  export type compileScript_Return = {
    /** Id of the script. */
    scriptId?: ScriptId;
    /** Exception details. */
    exceptionDetails?: ExceptionDetails;
  };
  export type runScript_Parameters = {
    /** Id of the script to run. */
    scriptId: ScriptId;
    /** Specifies in which isolated context to perform script run. Each content script lives in an isolated context and this parameter is used to specify one of those contexts. */
    executionContextId: Runtime.ExecutionContextId;
    /** Symbolic group name that can be used to release multiple objects. */
    objectGroup?: string;
    /** Specifies whether script run should stop on exceptions and mute console. Overrides setPauseOnException state. */
    doNotPauseOnExceptionsAndMuteConsole?: boolean;
  };
  export type runScript_Return = {
    /** Run result. */
    result: Runtime.RemoteObject;
    /** Exception details. */
    exceptionDetails?: ExceptionDetails;
  };
  export type setVariableValue_Parameters = {
    /** 0-based number of scope as was listed in scope chain. Only 'local', 'closure' and 'catch' scope types are allowed. Other scopes could be manipulated manually. */
    scopeNumber: number;
    /** Variable name. */
    variableName: string;
    /** New variable value. */
    newValue: Runtime.CallArgument;
    /** Id of callframe that holds variable. */
    callFrameId?: CallFrameId;
    /** Object id of closure (function) that holds variable. */
    functionObjectId?: Runtime.RemoteObjectId;
  };
  export type getStepInPositions_Parameters = {
    /** Id of a call frame where the current statement should be analized */
    callFrameId: CallFrameId;
  };
  export type getStepInPositions_Return = {
    /** experimental */
    stepInPositions?: Location[];
  };
  export type getBacktrace_Return = {
    /** Call stack the virtual machine stopped on. */
    callFrames: CallFrame[];
    /** Async stack trace, if any. */
    asyncStackTrace?: StackTrace;
  };
  export type skipStackFrames_Parameters = {
    /** Regular expression defining the scripts to ignore while stepping. */
    script?: string;
    /** True, if all content scripts should be ignored. */
    skipContentScripts?: boolean;
  };
  export type setAsyncCallStackDepth_Parameters = {
    /** Maximum depth of async call stacks. Setting to <code>0</code> will effectively disable collecting async call stacks (default). */
    maxDepth: number;
  };
  export type enablePromiseTracker_Parameters = {
    /** Whether to capture stack traces for promise creation and settlement events (default: false). */
    captureStacks?: boolean;
  };
  export type getPromiseById_Parameters = {
    promiseId: number;
    /** Symbolic group name that can be used to release multiple objects. */
    objectGroup?: string;
  };
  export type getPromiseById_Return = {
    /** Object wrapper for <code>Promise</code> with specified ID, if any. */
    promise: Runtime.RemoteObject;
  };
  export type setAsyncOperationBreakpoint_Parameters = {
    /** ID of the async operation to set breakpoint for. */
    operationId: number;
  };
  export type removeAsyncOperationBreakpoint_Parameters = {
    /** ID of the async operation to remove breakpoint for. */
    operationId: number;
  };
}
/** DOM debugging allows setting breakpoints on particular DOM operations and events. JavaScript execution will stop on these operations as if there was a regular breakpoint set. */
export class DOMDebugger {
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Sets breakpoint on particular operation with DOM. */
  setDOMBreakpoint(params: DOMDebugger.setDOMBreakpoint_Parameters): Promise<void> {
    return this._client.send<void>("DOMDebugger.setDOMBreakpoint", params);
  }
  /** Removes DOM breakpoint that was set using <code>setDOMBreakpoint</code>. */
  removeDOMBreakpoint(params: DOMDebugger.removeDOMBreakpoint_Parameters): Promise<void> {
    return this._client.send<void>("DOMDebugger.removeDOMBreakpoint", params);
  }
  /** Sets breakpoint on particular DOM event. */
  setEventListenerBreakpoint(params: DOMDebugger.setEventListenerBreakpoint_Parameters): Promise<void> {
    return this._client.send<void>("DOMDebugger.setEventListenerBreakpoint", params);
  }
  /** Removes breakpoint on particular DOM event. */
  removeEventListenerBreakpoint(params: DOMDebugger.removeEventListenerBreakpoint_Parameters): Promise<void> {
    return this._client.send<void>("DOMDebugger.removeEventListenerBreakpoint", params);
  }
  /** Sets breakpoint on particular native event. */
  setInstrumentationBreakpoint(params: DOMDebugger.setInstrumentationBreakpoint_Parameters): Promise<void> {
    return this._client.send<void>("DOMDebugger.setInstrumentationBreakpoint", params);
  }
  /** Removes breakpoint on particular native event. */
  removeInstrumentationBreakpoint(params: DOMDebugger.removeInstrumentationBreakpoint_Parameters): Promise<void> {
    return this._client.send<void>("DOMDebugger.removeInstrumentationBreakpoint", params);
  }
  /** Sets breakpoint on XMLHttpRequest. */
  setXHRBreakpoint(params: DOMDebugger.setXHRBreakpoint_Parameters): Promise<void> {
    return this._client.send<void>("DOMDebugger.setXHRBreakpoint", params);
  }
  /** Removes breakpoint from XMLHttpRequest. */
  removeXHRBreakpoint(params: DOMDebugger.removeXHRBreakpoint_Parameters): Promise<void> {
    return this._client.send<void>("DOMDebugger.removeXHRBreakpoint", params);
  }
  /** Returns event listeners of the given object. */
  getEventListeners(params: DOMDebugger.getEventListeners_Parameters): Promise<DOMDebugger.getEventListeners_Return> {
    return this._client.send<DOMDebugger.getEventListeners_Return>("DOMDebugger.getEventListeners", params);
  }
}
export namespace DOMDebugger {
  /** DOM breakpoint type. */
  export type DOMBreakpointType = "subtree-modified" | "attribute-modified" | "node-removed";
  /** Object event listener. */
  export interface EventListener {
    /** <code>EventListener</code>'s type. */
    type: string;
    /** <code>EventListener</code>'s useCapture. */
    useCapture: boolean;
    /** Handler code location. */
    location: Debugger.Location;
    /** Event handler function value. */
    handler?: Runtime.RemoteObject;
    /** Event original handler function value. */
    originalHandler?: Runtime.RemoteObject;
  }
  export type setDOMBreakpoint_Parameters = {
    /** Identifier of the node to set breakpoint on. */
    nodeId: DOM.NodeId;
    /** Type of the operation to stop upon. */
    type: DOMBreakpointType;
  };
  export type removeDOMBreakpoint_Parameters = {
    /** Identifier of the node to remove breakpoint from. */
    nodeId: DOM.NodeId;
    /** Type of the breakpoint to remove. */
    type: DOMBreakpointType;
  };
  export type setEventListenerBreakpoint_Parameters = {
    /** DOM Event name to stop on (any DOM event will do). */
    eventName: string;
    /** EventTarget interface name to stop on. If equal to <code>"*"</code> or not provided, will stop on any EventTarget. */
    targetName?: string;
  };
  export type removeEventListenerBreakpoint_Parameters = {
    /** Event name. */
    eventName: string;
    /** EventTarget interface name. */
    targetName?: string;
  };
  export type setInstrumentationBreakpoint_Parameters = {
    /** Instrumentation name to stop on. */
    eventName: string;
  };
  export type removeInstrumentationBreakpoint_Parameters = {
    /** Instrumentation name to stop on. */
    eventName: string;
  };
  export type setXHRBreakpoint_Parameters = {
    /** Resource URL substring. All XHRs having this substring in the URL will get stopped upon. */
    url: string;
  };
  export type removeXHRBreakpoint_Parameters = {
    /** Resource URL substring. */
    url: string;
  };
  export type getEventListeners_Parameters = {
    /** Identifier of the object to return listeners for. */
    objectId: Runtime.RemoteObjectId;
  };
  export type getEventListeners_Return = {
    /** Array of relevant listeners. */
    listeners: EventListener[];
  };
}
export class Profiler {
  private _consoleProfileStarted: Profiler.consoleProfileStarted_Handler = undefined;
  private _consoleProfileFinished: Profiler.consoleProfileFinished_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  enable(): Promise<void> {
    return this._client.send<void>("Profiler.enable");
  }
  disable(): Promise<void> {
    return this._client.send<void>("Profiler.disable");
  }
  /** Changes CPU profiler sampling interval. Must be called before CPU profiles recording started. */
  setSamplingInterval(params: Profiler.setSamplingInterval_Parameters): Promise<void> {
    return this._client.send<void>("Profiler.setSamplingInterval", params);
  }
  start(): Promise<void> {
    return this._client.send<void>("Profiler.start");
  }
  stop(): Promise<Profiler.stop_Return> {
    return this._client.send<Profiler.stop_Return>("Profiler.stop");
  }
  /** Sent when new profile recodring is started using console.profile() call. */
  get consoleProfileStarted(): Profiler.consoleProfileStarted_Handler {
    return this._consoleProfileStarted;
  }
  set consoleProfileStarted(handler: Profiler.consoleProfileStarted_Handler) {
    if (this._consoleProfileStarted) {
      this._client.removeListener("Profiler.consoleProfileStarted", this._consoleProfileStarted);
    }
    this._consoleProfileStarted = handler;
    if (handler) {
      this._client.on("Profiler.consoleProfileStarted", handler);
    }
  }
  get consoleProfileFinished(): Profiler.consoleProfileFinished_Handler {
    return this._consoleProfileFinished;
  }
  set consoleProfileFinished(handler: Profiler.consoleProfileFinished_Handler) {
    if (this._consoleProfileFinished) {
      this._client.removeListener("Profiler.consoleProfileFinished", this._consoleProfileFinished);
    }
    this._consoleProfileFinished = handler;
    if (handler) {
      this._client.on("Profiler.consoleProfileFinished", handler);
    }
  }
}
export namespace Profiler {
  /** CPU Profile node. Holds callsite information, execution statistics and child nodes. */
  export interface CPUProfileNode {
    /** Function name. */
    functionName: string;
    /** Script identifier. */
    scriptId: Debugger.ScriptId;
    /** URL. */
    url: string;
    /** 1-based line number of the function start position. */
    lineNumber: number;
    /** 1-based column number of the function start position. */
    columnNumber: number;
    /** Number of samples where this node was on top of the call stack. */
    hitCount: number;
    /** Call UID. */
    callUID: number;
    /** Child nodes. */
    children: CPUProfileNode[];
    /** The reason of being not optimized. The function may be deoptimized or marked as don't optimize. */
    deoptReason: string;
    /** Unique id of the node. */
    id: number;
    /** An array of source position ticks. */
    positionTicks: PositionTickInfo[];
  }
  /** Profile. */
  export interface CPUProfile {
    head: CPUProfileNode;
    /** Profiling start time in seconds. */
    startTime: number;
    /** Profiling end time in seconds. */
    endTime: number;
    /** Ids of samples top nodes. */
    samples?: number[];
    /** Timestamps of the samples in microseconds. */
    timestamps?: number[];
  }
  /** Specifies a number of samples attributed to a certain source position. */
  export interface PositionTickInfo {
    /** Source line number (1-based). */
    line: number;
    /** Number of samples attributed to the source line. */
    ticks: number;
  }
  export type consoleProfileStarted_Parameters = {
    id: string;
    /** Location of console.profile(). */
    location: Debugger.Location;
    /** Profile title passed as argument to console.profile(). */
    title?: string;
  };
  export type consoleProfileStarted_Handler = (params: consoleProfileStarted_Parameters) => void;
  export type consoleProfileFinished_Parameters = {
    id: string;
    /** Location of console.profileEnd(). */
    location: Debugger.Location;
    profile: CPUProfile;
    /** Profile title passed as argunet to console.profile(). */
    title?: string;
  };
  export type consoleProfileFinished_Handler = (params: consoleProfileFinished_Parameters) => void;
  export type setSamplingInterval_Parameters = {
    /** New sampling interval in microseconds. */
    interval: number;
  };
  export type stop_Return = {
    /** Recorded profile. */
    profile: CPUProfile;
  };
}
export class HeapProfiler {
  private _addHeapSnapshotChunk: HeapProfiler.addHeapSnapshotChunk_Handler = undefined;
  private _resetProfiles: HeapProfiler.resetProfiles_Handler = undefined;
  private _reportHeapSnapshotProgress: HeapProfiler.reportHeapSnapshotProgress_Handler = undefined;
  private _lastSeenObjectId: HeapProfiler.lastSeenObjectId_Handler = undefined;
  private _heapStatsUpdate: HeapProfiler.heapStatsUpdate_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  enable(): Promise<void> {
    return this._client.send<void>("HeapProfiler.enable");
  }
  disable(): Promise<void> {
    return this._client.send<void>("HeapProfiler.disable");
  }
  startTrackingHeapObjects(params: HeapProfiler.startTrackingHeapObjects_Parameters): Promise<void> {
    return this._client.send<void>("HeapProfiler.startTrackingHeapObjects", params);
  }
  stopTrackingHeapObjects(params: HeapProfiler.stopTrackingHeapObjects_Parameters): Promise<void> {
    return this._client.send<void>("HeapProfiler.stopTrackingHeapObjects", params);
  }
  takeHeapSnapshot(params: HeapProfiler.takeHeapSnapshot_Parameters): Promise<void> {
    return this._client.send<void>("HeapProfiler.takeHeapSnapshot", params);
  }
  collectGarbage(): Promise<void> {
    return this._client.send<void>("HeapProfiler.collectGarbage");
  }
  getObjectByHeapObjectId(params: HeapProfiler.getObjectByHeapObjectId_Parameters): Promise<HeapProfiler.getObjectByHeapObjectId_Return> {
    return this._client.send<HeapProfiler.getObjectByHeapObjectId_Return>("HeapProfiler.getObjectByHeapObjectId", params);
  }
  /** Enables console to refer to the node with given id via $x (see Command Line API for more details $x functions). */
  addInspectedHeapObject(params: HeapProfiler.addInspectedHeapObject_Parameters): Promise<void> {
    return this._client.send<void>("HeapProfiler.addInspectedHeapObject", params);
  }
  getHeapObjectId(params: HeapProfiler.getHeapObjectId_Parameters): Promise<HeapProfiler.getHeapObjectId_Return> {
    return this._client.send<HeapProfiler.getHeapObjectId_Return>("HeapProfiler.getHeapObjectId", params);
  }
  get addHeapSnapshotChunk(): HeapProfiler.addHeapSnapshotChunk_Handler {
    return this._addHeapSnapshotChunk;
  }
  set addHeapSnapshotChunk(handler: HeapProfiler.addHeapSnapshotChunk_Handler) {
    if (this._addHeapSnapshotChunk) {
      this._client.removeListener("HeapProfiler.addHeapSnapshotChunk", this._addHeapSnapshotChunk);
    }
    this._addHeapSnapshotChunk = handler;
    if (handler) {
      this._client.on("HeapProfiler.addHeapSnapshotChunk", handler);
    }
  }
  get resetProfiles(): HeapProfiler.resetProfiles_Handler {
    return this._resetProfiles;
  }
  set resetProfiles(handler: HeapProfiler.resetProfiles_Handler) {
    if (this._resetProfiles) {
      this._client.removeListener("HeapProfiler.resetProfiles", this._resetProfiles);
    }
    this._resetProfiles = handler;
    if (handler) {
      this._client.on("HeapProfiler.resetProfiles", handler);
    }
  }
  get reportHeapSnapshotProgress(): HeapProfiler.reportHeapSnapshotProgress_Handler {
    return this._reportHeapSnapshotProgress;
  }
  set reportHeapSnapshotProgress(handler: HeapProfiler.reportHeapSnapshotProgress_Handler) {
    if (this._reportHeapSnapshotProgress) {
      this._client.removeListener("HeapProfiler.reportHeapSnapshotProgress", this._reportHeapSnapshotProgress);
    }
    this._reportHeapSnapshotProgress = handler;
    if (handler) {
      this._client.on("HeapProfiler.reportHeapSnapshotProgress", handler);
    }
  }
  /** If heap objects tracking has been started then backend regulary sends a current value for last seen object id and corresponding timestamp. If the were changes in the heap since last event then one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event. */
  get lastSeenObjectId(): HeapProfiler.lastSeenObjectId_Handler {
    return this._lastSeenObjectId;
  }
  set lastSeenObjectId(handler: HeapProfiler.lastSeenObjectId_Handler) {
    if (this._lastSeenObjectId) {
      this._client.removeListener("HeapProfiler.lastSeenObjectId", this._lastSeenObjectId);
    }
    this._lastSeenObjectId = handler;
    if (handler) {
      this._client.on("HeapProfiler.lastSeenObjectId", handler);
    }
  }
  /** If heap objects tracking has been started then backend may send update for one or more fragments */
  get heapStatsUpdate(): HeapProfiler.heapStatsUpdate_Handler {
    return this._heapStatsUpdate;
  }
  set heapStatsUpdate(handler: HeapProfiler.heapStatsUpdate_Handler) {
    if (this._heapStatsUpdate) {
      this._client.removeListener("HeapProfiler.heapStatsUpdate", this._heapStatsUpdate);
    }
    this._heapStatsUpdate = handler;
    if (handler) {
      this._client.on("HeapProfiler.heapStatsUpdate", handler);
    }
  }
}
export namespace HeapProfiler {
  /** Heap snapshot object id. */
  export type HeapSnapshotObjectId = string;
  export type addHeapSnapshotChunk_Parameters = {
    chunk: string;
  };
  export type addHeapSnapshotChunk_Handler = (params: addHeapSnapshotChunk_Parameters) => void;
  export type resetProfiles_Handler = () => void;
  export type reportHeapSnapshotProgress_Parameters = {
    done: number;
    total: number;
    finished?: boolean;
  };
  export type reportHeapSnapshotProgress_Handler = (params: reportHeapSnapshotProgress_Parameters) => void;
  export type lastSeenObjectId_Parameters = {
    lastSeenObjectId: number;
    timestamp: number;
  };
  export type lastSeenObjectId_Handler = (params: lastSeenObjectId_Parameters) => void;
  export type heapStatsUpdate_Parameters = {
    /** An array of triplets. Each triplet describes a fragment. The first integer is the fragment index, the second integer is a total count of objects for the fragment, the third integer is a total size of the objects for the fragment. */
    statsUpdate: number[];
  };
  export type heapStatsUpdate_Handler = (params: heapStatsUpdate_Parameters) => void;
  export type startTrackingHeapObjects_Parameters = {
    trackAllocations?: boolean;
  };
  export type stopTrackingHeapObjects_Parameters = {
    /** If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken when the tracking is stopped. */
    reportProgress?: boolean;
  };
  export type takeHeapSnapshot_Parameters = {
    /** If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken. */
    reportProgress?: boolean;
  };
  export type getObjectByHeapObjectId_Parameters = {
    objectId: HeapSnapshotObjectId;
    /** Symbolic group name that can be used to release multiple objects. */
    objectGroup?: string;
  };
  export type getObjectByHeapObjectId_Return = {
    /** Evaluation result. */
    result: Runtime.RemoteObject;
  };
  export type addInspectedHeapObject_Parameters = {
    /** Heap snapshot object id to be accessible by means of $x command line API. */
    heapObjectId: HeapSnapshotObjectId;
  };
  export type getHeapObjectId_Parameters = {
    /** Identifier of the object to get heap object id for. */
    objectId: Runtime.RemoteObjectId;
  };
  export type getHeapObjectId_Return = {
    /** Id of the heap snapshot object corresponding to the passed remote object id. */
    heapSnapshotObjectId: HeapSnapshotObjectId;
  };
}
export class Worker {
  private _workerCreated: Worker.workerCreated_Handler = undefined;
  private _workerTerminated: Worker.workerTerminated_Handler = undefined;
  private _dispatchMessageFromWorker: Worker.dispatchMessageFromWorker_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  enable(): Promise<void> {
    return this._client.send<void>("Worker.enable");
  }
  disable(): Promise<void> {
    return this._client.send<void>("Worker.disable");
  }
  sendMessageToWorker(params: Worker.sendMessageToWorker_Parameters): Promise<void> {
    return this._client.send<void>("Worker.sendMessageToWorker", params);
  }
  connectToWorker(params: Worker.connectToWorker_Parameters): Promise<void> {
    return this._client.send<void>("Worker.connectToWorker", params);
  }
  disconnectFromWorker(params: Worker.disconnectFromWorker_Parameters): Promise<void> {
    return this._client.send<void>("Worker.disconnectFromWorker", params);
  }
  setAutoconnectToWorkers(params: Worker.setAutoconnectToWorkers_Parameters): Promise<void> {
    return this._client.send<void>("Worker.setAutoconnectToWorkers", params);
  }
  get workerCreated(): Worker.workerCreated_Handler {
    return this._workerCreated;
  }
  set workerCreated(handler: Worker.workerCreated_Handler) {
    if (this._workerCreated) {
      this._client.removeListener("Worker.workerCreated", this._workerCreated);
    }
    this._workerCreated = handler;
    if (handler) {
      this._client.on("Worker.workerCreated", handler);
    }
  }
  get workerTerminated(): Worker.workerTerminated_Handler {
    return this._workerTerminated;
  }
  set workerTerminated(handler: Worker.workerTerminated_Handler) {
    if (this._workerTerminated) {
      this._client.removeListener("Worker.workerTerminated", this._workerTerminated);
    }
    this._workerTerminated = handler;
    if (handler) {
      this._client.on("Worker.workerTerminated", handler);
    }
  }
  get dispatchMessageFromWorker(): Worker.dispatchMessageFromWorker_Handler {
    return this._dispatchMessageFromWorker;
  }
  set dispatchMessageFromWorker(handler: Worker.dispatchMessageFromWorker_Handler) {
    if (this._dispatchMessageFromWorker) {
      this._client.removeListener("Worker.dispatchMessageFromWorker", this._dispatchMessageFromWorker);
    }
    this._dispatchMessageFromWorker = handler;
    if (handler) {
      this._client.on("Worker.dispatchMessageFromWorker", handler);
    }
  }
}
export namespace Worker {
  export type workerCreated_Parameters = {
    workerId: string;
    url: string;
    inspectorConnected: boolean;
  };
  export type workerCreated_Handler = (params: workerCreated_Parameters) => void;
  export type workerTerminated_Parameters = {
    workerId: string;
  };
  export type workerTerminated_Handler = (params: workerTerminated_Parameters) => void;
  export type dispatchMessageFromWorker_Parameters = {
    workerId: string;
    message: string;
  };
  export type dispatchMessageFromWorker_Handler = (params: dispatchMessageFromWorker_Parameters) => void;
  export type sendMessageToWorker_Parameters = {
    workerId: string;
    message: string;
  };
  export type connectToWorker_Parameters = {
    workerId: string;
  };
  export type disconnectFromWorker_Parameters = {
    workerId: string;
  };
  export type setAutoconnectToWorkers_Parameters = {
    value: boolean;
  };
}
export class ServiceWorker {
  private _workerCreated: ServiceWorker.workerCreated_Handler = undefined;
  private _workerTerminated: ServiceWorker.workerTerminated_Handler = undefined;
  private _dispatchMessage: ServiceWorker.dispatchMessage_Handler = undefined;
  private _workerRegistrationUpdated: ServiceWorker.workerRegistrationUpdated_Handler = undefined;
  private _workerVersionUpdated: ServiceWorker.workerVersionUpdated_Handler = undefined;
  private _workerErrorReported: ServiceWorker.workerErrorReported_Handler = undefined;
  private _debugOnStartUpdated: ServiceWorker.debugOnStartUpdated_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  enable(): Promise<void> {
    return this._client.send<void>("ServiceWorker.enable");
  }
  disable(): Promise<void> {
    return this._client.send<void>("ServiceWorker.disable");
  }
  sendMessage(params: ServiceWorker.sendMessage_Parameters): Promise<void> {
    return this._client.send<void>("ServiceWorker.sendMessage", params);
  }
  stop(params: ServiceWorker.stop_Parameters): Promise<void> {
    return this._client.send<void>("ServiceWorker.stop", params);
  }
  unregister(params: ServiceWorker.unregister_Parameters): Promise<void> {
    return this._client.send<void>("ServiceWorker.unregister", params);
  }
  updateRegistration(params: ServiceWorker.updateRegistration_Parameters): Promise<void> {
    return this._client.send<void>("ServiceWorker.updateRegistration", params);
  }
  startWorker(params: ServiceWorker.startWorker_Parameters): Promise<void> {
    return this._client.send<void>("ServiceWorker.startWorker", params);
  }
  stopWorker(params: ServiceWorker.stopWorker_Parameters): Promise<void> {
    return this._client.send<void>("ServiceWorker.stopWorker", params);
  }
  inspectWorker(params: ServiceWorker.inspectWorker_Parameters): Promise<void> {
    return this._client.send<void>("ServiceWorker.inspectWorker", params);
  }
  setDebugOnStart(params: ServiceWorker.setDebugOnStart_Parameters): Promise<void> {
    return this._client.send<void>("ServiceWorker.setDebugOnStart", params);
  }
  setForceUpdateOnPageLoad(params: ServiceWorker.setForceUpdateOnPageLoad_Parameters): Promise<void> {
    return this._client.send<void>("ServiceWorker.setForceUpdateOnPageLoad", params);
  }
  deliverPushMessage(params: ServiceWorker.deliverPushMessage_Parameters): Promise<void> {
    return this._client.send<void>("ServiceWorker.deliverPushMessage", params);
  }
  getTargetInfo(params: ServiceWorker.getTargetInfo_Parameters): Promise<ServiceWorker.getTargetInfo_Return> {
    return this._client.send<ServiceWorker.getTargetInfo_Return>("ServiceWorker.getTargetInfo", params);
  }
  activateTarget(params: ServiceWorker.activateTarget_Parameters): Promise<void> {
    return this._client.send<void>("ServiceWorker.activateTarget", params);
  }
  get workerCreated(): ServiceWorker.workerCreated_Handler {
    return this._workerCreated;
  }
  set workerCreated(handler: ServiceWorker.workerCreated_Handler) {
    if (this._workerCreated) {
      this._client.removeListener("ServiceWorker.workerCreated", this._workerCreated);
    }
    this._workerCreated = handler;
    if (handler) {
      this._client.on("ServiceWorker.workerCreated", handler);
    }
  }
  get workerTerminated(): ServiceWorker.workerTerminated_Handler {
    return this._workerTerminated;
  }
  set workerTerminated(handler: ServiceWorker.workerTerminated_Handler) {
    if (this._workerTerminated) {
      this._client.removeListener("ServiceWorker.workerTerminated", this._workerTerminated);
    }
    this._workerTerminated = handler;
    if (handler) {
      this._client.on("ServiceWorker.workerTerminated", handler);
    }
  }
  get dispatchMessage(): ServiceWorker.dispatchMessage_Handler {
    return this._dispatchMessage;
  }
  set dispatchMessage(handler: ServiceWorker.dispatchMessage_Handler) {
    if (this._dispatchMessage) {
      this._client.removeListener("ServiceWorker.dispatchMessage", this._dispatchMessage);
    }
    this._dispatchMessage = handler;
    if (handler) {
      this._client.on("ServiceWorker.dispatchMessage", handler);
    }
  }
  get workerRegistrationUpdated(): ServiceWorker.workerRegistrationUpdated_Handler {
    return this._workerRegistrationUpdated;
  }
  set workerRegistrationUpdated(handler: ServiceWorker.workerRegistrationUpdated_Handler) {
    if (this._workerRegistrationUpdated) {
      this._client.removeListener("ServiceWorker.workerRegistrationUpdated", this._workerRegistrationUpdated);
    }
    this._workerRegistrationUpdated = handler;
    if (handler) {
      this._client.on("ServiceWorker.workerRegistrationUpdated", handler);
    }
  }
  get workerVersionUpdated(): ServiceWorker.workerVersionUpdated_Handler {
    return this._workerVersionUpdated;
  }
  set workerVersionUpdated(handler: ServiceWorker.workerVersionUpdated_Handler) {
    if (this._workerVersionUpdated) {
      this._client.removeListener("ServiceWorker.workerVersionUpdated", this._workerVersionUpdated);
    }
    this._workerVersionUpdated = handler;
    if (handler) {
      this._client.on("ServiceWorker.workerVersionUpdated", handler);
    }
  }
  get workerErrorReported(): ServiceWorker.workerErrorReported_Handler {
    return this._workerErrorReported;
  }
  set workerErrorReported(handler: ServiceWorker.workerErrorReported_Handler) {
    if (this._workerErrorReported) {
      this._client.removeListener("ServiceWorker.workerErrorReported", this._workerErrorReported);
    }
    this._workerErrorReported = handler;
    if (handler) {
      this._client.on("ServiceWorker.workerErrorReported", handler);
    }
  }
  get debugOnStartUpdated(): ServiceWorker.debugOnStartUpdated_Handler {
    return this._debugOnStartUpdated;
  }
  set debugOnStartUpdated(handler: ServiceWorker.debugOnStartUpdated_Handler) {
    if (this._debugOnStartUpdated) {
      this._client.removeListener("ServiceWorker.debugOnStartUpdated", this._debugOnStartUpdated);
    }
    this._debugOnStartUpdated = handler;
    if (handler) {
      this._client.on("ServiceWorker.debugOnStartUpdated", handler);
    }
  }
}
export namespace ServiceWorker {
  /** ServiceWorker registration. */
  export interface ServiceWorkerRegistration {
    registrationId: string;
    scopeURL: string;
    isDeleted: boolean;
    forceUpdateOnPageLoad?: boolean;
  }
  export type ServiceWorkerVersionRunningStatus = "stopped" | "starting" | "running" | "stopping";
  export type ServiceWorkerVersionStatus = "new" | "installing" | "installed" | "activating" | "activated" | "redundant";
  export type TargetID = string;
  /** ServiceWorker version. */
  export interface ServiceWorkerVersion {
    versionId: string;
    registrationId: string;
    scriptURL: string;
    runningStatus: ServiceWorkerVersionRunningStatus;
    status: ServiceWorkerVersionStatus;
    /** The Last-Modified header value of the main script. */
    scriptLastModified?: number;
    /** The time at which the response headers of the main script were received from the server.  For cached script it is the last time the cache entry was validated. */
    scriptResponseTime?: number;
    controlledClients?: TargetID[];
  }
  /** ServiceWorker error message. */
  export interface ServiceWorkerErrorMessage {
    errorMessage: string;
    registrationId: string;
    versionId: string;
    sourceURL: string;
    lineNumber: number;
    columnNumber: number;
  }
  export interface TargetInfo {
    id: TargetID;
    type: string;
    title: string;
    url: string;
  }
  export type workerCreated_Parameters = {
    workerId: string;
    url: string;
    versionId: string;
  };
  export type workerCreated_Handler = (params: workerCreated_Parameters) => void;
  export type workerTerminated_Parameters = {
    workerId: string;
  };
  export type workerTerminated_Handler = (params: workerTerminated_Parameters) => void;
  export type dispatchMessage_Parameters = {
    workerId: string;
    message: string;
  };
  export type dispatchMessage_Handler = (params: dispatchMessage_Parameters) => void;
  export type workerRegistrationUpdated_Parameters = {
    registrations: ServiceWorkerRegistration[];
  };
  export type workerRegistrationUpdated_Handler = (params: workerRegistrationUpdated_Parameters) => void;
  export type workerVersionUpdated_Parameters = {
    versions: ServiceWorkerVersion[];
  };
  export type workerVersionUpdated_Handler = (params: workerVersionUpdated_Parameters) => void;
  export type workerErrorReported_Parameters = {
    errorMessage: ServiceWorkerErrorMessage;
  };
  export type workerErrorReported_Handler = (params: workerErrorReported_Parameters) => void;
  export type debugOnStartUpdated_Parameters = {
    debugOnStart: boolean;
  };
  export type debugOnStartUpdated_Handler = (params: debugOnStartUpdated_Parameters) => void;
  export type sendMessage_Parameters = {
    workerId: string;
    message: string;
  };
  export type stop_Parameters = {
    workerId: string;
  };
  export type unregister_Parameters = {
    scopeURL: string;
  };
  export type updateRegistration_Parameters = {
    scopeURL: string;
  };
  export type startWorker_Parameters = {
    scopeURL: string;
  };
  export type stopWorker_Parameters = {
    versionId: string;
  };
  export type inspectWorker_Parameters = {
    versionId: string;
  };
  export type setDebugOnStart_Parameters = {
    debugOnStart: boolean;
  };
  export type setForceUpdateOnPageLoad_Parameters = {
    registrationId: string;
    forceUpdateOnPageLoad: boolean;
  };
  export type deliverPushMessage_Parameters = {
    origin: string;
    registrationId: string;
    data: string;
  };
  export type getTargetInfo_Parameters = {
    targetId: TargetID;
  };
  export type getTargetInfo_Return = {
    targetInfo: TargetInfo;
  };
  export type activateTarget_Parameters = {
    targetId: TargetID;
  };
}
export class Input {
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Dispatches a key event to the page. */
  dispatchKeyEvent(params: Input.dispatchKeyEvent_Parameters): Promise<void> {
    return this._client.send<void>("Input.dispatchKeyEvent", params);
  }
  /** Dispatches a mouse event to the page. */
  dispatchMouseEvent(params: Input.dispatchMouseEvent_Parameters): Promise<void> {
    return this._client.send<void>("Input.dispatchMouseEvent", params);
  }
  /** Dispatches a touch event to the page. */
  dispatchTouchEvent(params: Input.dispatchTouchEvent_Parameters): Promise<void> {
    return this._client.send<void>("Input.dispatchTouchEvent", params);
  }
  /** Emulates touch event from the mouse event parameters. */
  emulateTouchFromMouseEvent(params: Input.emulateTouchFromMouseEvent_Parameters): Promise<void> {
    return this._client.send<void>("Input.emulateTouchFromMouseEvent", params);
  }
  /** Synthesizes a pinch gesture over a time period by issuing appropriate touch events. */
  synthesizePinchGesture(params: Input.synthesizePinchGesture_Parameters): Promise<void> {
    return this._client.send<void>("Input.synthesizePinchGesture", params);
  }
  /** Synthesizes a scroll gesture over a time period by issuing appropriate touch events. */
  synthesizeScrollGesture(params: Input.synthesizeScrollGesture_Parameters): Promise<void> {
    return this._client.send<void>("Input.synthesizeScrollGesture", params);
  }
  /** Synthesizes a tap gesture over a time period by issuing appropriate touch events. */
  synthesizeTapGesture(params: Input.synthesizeTapGesture_Parameters): Promise<void> {
    return this._client.send<void>("Input.synthesizeTapGesture", params);
  }
}
export namespace Input {
  export interface TouchPoint {
    /** State of the touch point. */
    state: "touchPressed" | "touchReleased" | "touchMoved" | "touchStationary" | "touchCancelled";
    /** X coordinate of the event relative to the main frame's viewport. */
    x: number;
    /** Y coordinate of the event relative to the main frame's viewport. 0 refers to the top of the viewport and Y increases as it proceeds towards the bottom of the viewport. */
    y: number;
    /** X radius of the touch area (default: 1). */
    radiusX?: number;
    /** Y radius of the touch area (default: 1). */
    radiusY?: number;
    /** Rotation angle (default: 0.0). */
    rotationAngle?: number;
    /** Force (default: 1.0). */
    force?: number;
    /** Identifier used to track touch sources between events, must be unique within an event. */
    id?: number;
  }
  export type GestureSourceType = "default" | "touch" | "mouse";
  export type dispatchKeyEvent_Parameters = {
    /** Type of the key event. */
    type: "keyDown" | "keyUp" | "rawKeyDown" | "char";
    /** Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0). */
    modifiers?: number;
    /** Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970 (default: current time). */
    timestamp?: number;
    /** Text as generated by processing a virtual key code with a keyboard layout. Not needed for for <code>keyUp</code> and <code>rawKeyDown</code> events (default: "") */
    text?: string;
    /** Text that would have been generated by the keyboard if no modifiers were pressed (except for shift). Useful for shortcut (accelerator) key handling (default: ""). */
    unmodifiedText?: string;
    /** Unique key identifier (e.g., 'U+0041') (default: ""). */
    keyIdentifier?: string;
    /** Unique DOM defined string value for each physical key (e.g., 'KeyA') (default: ""). */
    code?: string;
    /** Unique DOM defined string value describing the meaning of the key in the context of active modifiers, keyboard layout, etc (e.g., 'AltGr') (default: ""). */
    key?: string;
    /** Windows virtual key code (default: 0). */
    windowsVirtualKeyCode?: number;
    /** Native virtual key code (default: 0). */
    nativeVirtualKeyCode?: number;
    /** Whether the event was generated from auto repeat (default: false). */
    autoRepeat?: boolean;
    /** Whether the event was generated from the keypad (default: false). */
    isKeypad?: boolean;
    /** Whether the event was a system key event (default: false). */
    isSystemKey?: boolean;
  };
  export type dispatchMouseEvent_Parameters = {
    /** Type of the mouse event. */
    type: "mousePressed" | "mouseReleased" | "mouseMoved";
    /** X coordinate of the event relative to the main frame's viewport. */
    x: number;
    /** Y coordinate of the event relative to the main frame's viewport. 0 refers to the top of the viewport and Y increases as it proceeds towards the bottom of the viewport. */
    y: number;
    /** Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0). */
    modifiers?: number;
    /** Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970 (default: current time). */
    timestamp?: number;
    /** Mouse button (default: "none"). */
    button?: "none" | "left" | "middle" | "right";
    /** Number of times the mouse button was clicked (default: 0). */
    clickCount?: number;
  };
  export type dispatchTouchEvent_Parameters = {
    /** Type of the touch event. */
    type: "touchStart" | "touchEnd" | "touchMove";
    /** Touch points. */
    touchPoints: TouchPoint[];
    /** Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0). */
    modifiers?: number;
    /** Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970 (default: current time). */
    timestamp?: number;
  };
  export type emulateTouchFromMouseEvent_Parameters = {
    /** Type of the mouse event. */
    type: "mousePressed" | "mouseReleased" | "mouseMoved" | "mouseWheel";
    /** X coordinate of the mouse pointer in DIP. */
    x: number;
    /** Y coordinate of the mouse pointer in DIP. */
    y: number;
    /** Time at which the event occurred. Measured in UTC time in seconds since January 1, 1970. */
    timestamp: number;
    /** Mouse button. */
    button: "none" | "left" | "middle" | "right";
    /** X delta in DIP for mouse wheel event (default: 0). */
    deltaX?: number;
    /** Y delta in DIP for mouse wheel event (default: 0). */
    deltaY?: number;
    /** Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8 (default: 0). */
    modifiers?: number;
    /** Number of times the mouse button was clicked (default: 0). */
    clickCount?: number;
  };
  export type synthesizePinchGesture_Parameters = {
    /** X coordinate of the start of the gesture in CSS pixels. */
    x: number;
    /** Y coordinate of the start of the gesture in CSS pixels. */
    y: number;
    /** Relative scale factor after zooming (>1.0 zooms in, <1.0 zooms out). */
    scaleFactor: number;
    /** Relative pointer speed in pixels per second (default: 800). */
    relativeSpeed?: number;
    /** Which type of input events to be generated (default: 'default', which queries the platform for the preferred input type). */
    gestureSourceType?: GestureSourceType;
  };
  export type synthesizeScrollGesture_Parameters = {
    /** X coordinate of the start of the gesture in CSS pixels. */
    x: number;
    /** Y coordinate of the start of the gesture in CSS pixels. */
    y: number;
    /** The distance to scroll along the X axis (positive to scroll left). */
    xDistance?: number;
    /** The distance to scroll along the Y axis (positive to scroll up). */
    yDistance?: number;
    /** The number of additional pixels to scroll back along the X axis, in addition to the given distance. */
    xOverscroll?: number;
    /** The number of additional pixels to scroll back along the Y axis, in addition to the given distance. */
    yOverscroll?: number;
    /** Prevent fling (default: true). */
    preventFling?: boolean;
    /** Swipe speed in pixels per second (default: 800). */
    speed?: number;
    /** Which type of input events to be generated (default: 'default', which queries the platform for the preferred input type). */
    gestureSourceType?: GestureSourceType;
    /** The number of times to repeat the gesture (default: 0). */
    repeatCount?: number;
    /** The number of milliseconds delay between each repeat. (default: 250). */
    repeatDelayMs?: number;
    /** The name of the interaction markers to generate, if not empty (default: ""). */
    interactionMarkerName?: string;
  };
  export type synthesizeTapGesture_Parameters = {
    /** X coordinate of the start of the gesture in CSS pixels. */
    x: number;
    /** Y coordinate of the start of the gesture in CSS pixels. */
    y: number;
    /** Duration between touchdown and touchup events in ms (default: 50). */
    duration?: number;
    /** Number of times to perform the tap (e.g. 2 for double tap, default: 1). */
    tapCount?: number;
    /** Which type of input events to be generated (default: 'default', which queries the platform for the preferred input type). */
    gestureSourceType?: GestureSourceType;
  };
}
export class LayerTree {
  private _layerTreeDidChange: LayerTree.layerTreeDidChange_Handler = undefined;
  private _layerPainted: LayerTree.layerPainted_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables compositing tree inspection. */
  enable(): Promise<void> {
    return this._client.send<void>("LayerTree.enable");
  }
  /** Disables compositing tree inspection. */
  disable(): Promise<void> {
    return this._client.send<void>("LayerTree.disable");
  }
  /** Provides the reasons why the given layer was composited. */
  compositingReasons(params: LayerTree.compositingReasons_Parameters): Promise<LayerTree.compositingReasons_Return> {
    return this._client.send<LayerTree.compositingReasons_Return>("LayerTree.compositingReasons", params);
  }
  /** Returns the layer snapshot identifier. */
  makeSnapshot(params: LayerTree.makeSnapshot_Parameters): Promise<LayerTree.makeSnapshot_Return> {
    return this._client.send<LayerTree.makeSnapshot_Return>("LayerTree.makeSnapshot", params);
  }
  /** Returns the snapshot identifier. */
  loadSnapshot(params: LayerTree.loadSnapshot_Parameters): Promise<LayerTree.loadSnapshot_Return> {
    return this._client.send<LayerTree.loadSnapshot_Return>("LayerTree.loadSnapshot", params);
  }
  /** Releases layer snapshot captured by the back-end. */
  releaseSnapshot(params: LayerTree.releaseSnapshot_Parameters): Promise<void> {
    return this._client.send<void>("LayerTree.releaseSnapshot", params);
  }
  profileSnapshot(params: LayerTree.profileSnapshot_Parameters): Promise<LayerTree.profileSnapshot_Return> {
    return this._client.send<LayerTree.profileSnapshot_Return>("LayerTree.profileSnapshot", params);
  }
  /** Replays the layer snapshot and returns the resulting bitmap. */
  replaySnapshot(params: LayerTree.replaySnapshot_Parameters): Promise<LayerTree.replaySnapshot_Return> {
    return this._client.send<LayerTree.replaySnapshot_Return>("LayerTree.replaySnapshot", params);
  }
  /** Replays the layer snapshot and returns canvas log. */
  snapshotCommandLog(params: LayerTree.snapshotCommandLog_Parameters): Promise<LayerTree.snapshotCommandLog_Return> {
    return this._client.send<LayerTree.snapshotCommandLog_Return>("LayerTree.snapshotCommandLog", params);
  }
  get layerTreeDidChange(): LayerTree.layerTreeDidChange_Handler {
    return this._layerTreeDidChange;
  }
  set layerTreeDidChange(handler: LayerTree.layerTreeDidChange_Handler) {
    if (this._layerTreeDidChange) {
      this._client.removeListener("LayerTree.layerTreeDidChange", this._layerTreeDidChange);
    }
    this._layerTreeDidChange = handler;
    if (handler) {
      this._client.on("LayerTree.layerTreeDidChange", handler);
    }
  }
  get layerPainted(): LayerTree.layerPainted_Handler {
    return this._layerPainted;
  }
  set layerPainted(handler: LayerTree.layerPainted_Handler) {
    if (this._layerPainted) {
      this._client.removeListener("LayerTree.layerPainted", this._layerPainted);
    }
    this._layerPainted = handler;
    if (handler) {
      this._client.on("LayerTree.layerPainted", handler);
    }
  }
}
export namespace LayerTree {
  /** Unique Layer identifier. */
  export type LayerId = string;
  /** Unique snapshot identifier. */
  export type SnapshotId = string;
  /** Rectangle where scrolling happens on the main thread. */
  export interface ScrollRect {
    /** Rectangle itself. */
    rect: DOM.Rect;
    /** Reason for rectangle to force scrolling on the main thread */
    type: "RepaintsOnScroll" | "TouchEventHandler" | "WheelEventHandler";
  }
  /** Serialized fragment of layer picture along with its offset within the layer. */
  export interface PictureTile {
    /** Offset from owning layer left boundary */
    x: number;
    /** Offset from owning layer top boundary */
    y: number;
    /** Base64-encoded snapshot data. */
    picture: string;
  }
  /** Information about a compositing layer. */
  export interface Layer {
    /** The unique id for this layer. */
    layerId: LayerId;
    /** The id of parent (not present for root). */
    parentLayerId?: LayerId;
    /** The backend id for the node associated with this layer. */
    backendNodeId?: DOM.BackendNodeId;
    /** Offset from parent layer, X coordinate. */
    offsetX: number;
    /** Offset from parent layer, Y coordinate. */
    offsetY: number;
    /** Layer width. */
    width: number;
    /** Layer height. */
    height: number;
    /** Transformation matrix for layer, default is identity matrix */
    transform?: number[];
    /** Transform anchor point X, absent if no transform specified */
    anchorX?: number;
    /** Transform anchor point Y, absent if no transform specified */
    anchorY?: number;
    /** Transform anchor point Z, absent if no transform specified */
    anchorZ?: number;
    /** Indicates how many time this layer has painted. */
    paintCount: number;
    /** Indicates whether this layer hosts any content, rather than being used for transform/scrolling purposes only. */
    drawsContent: boolean;
    /** Set if layer is not visible. */
    invisible?: boolean;
    /** Rectangles scrolling on main thread only. */
    scrollRects?: ScrollRect[];
  }
  /** Array of timings, one per paint step. */
  export type PaintProfile = number[];
  export type layerTreeDidChange_Parameters = {
    /** Layer tree, absent if not in the comspositing mode. */
    layers?: Layer[];
  };
  export type layerTreeDidChange_Handler = (params: layerTreeDidChange_Parameters) => void;
  export type layerPainted_Parameters = {
    /** The id of the painted layer. */
    layerId: LayerId;
    /** Clip rectangle. */
    clip: DOM.Rect;
  };
  export type layerPainted_Handler = (params: layerPainted_Parameters) => void;
  export type compositingReasons_Parameters = {
    /** The id of the layer for which we want to get the reasons it was composited. */
    layerId: LayerId;
  };
  export type compositingReasons_Return = {
    /** A list of strings specifying reasons for the given layer to become composited. */
    compositingReasons: string[];
  };
  export type makeSnapshot_Parameters = {
    /** The id of the layer. */
    layerId: LayerId;
  };
  export type makeSnapshot_Return = {
    /** The id of the layer snapshot. */
    snapshotId: SnapshotId;
  };
  export type loadSnapshot_Parameters = {
    /** An array of tiles composing the snapshot. */
    tiles: PictureTile[];
  };
  export type loadSnapshot_Return = {
    /** The id of the snapshot. */
    snapshotId: SnapshotId;
  };
  export type releaseSnapshot_Parameters = {
    /** The id of the layer snapshot. */
    snapshotId: SnapshotId;
  };
  export type profileSnapshot_Parameters = {
    /** The id of the layer snapshot. */
    snapshotId: SnapshotId;
    /** The maximum number of times to replay the snapshot (1, if not specified). */
    minRepeatCount?: number;
    /** The minimum duration (in seconds) to replay the snapshot. */
    minDuration?: number;
    /** The clip rectangle to apply when replaying the snapshot. */
    clipRect?: DOM.Rect;
  };
  export type profileSnapshot_Return = {
    /** The array of paint profiles, one per run. */
    timings: PaintProfile[];
  };
  export type replaySnapshot_Parameters = {
    /** The id of the layer snapshot. */
    snapshotId: SnapshotId;
    /** The first step to replay from (replay from the very start if not specified). */
    fromStep?: number;
    /** The last step to replay to (replay till the end if not specified). */
    toStep?: number;
    /** The scale to apply while replaying (defaults to 1). */
    scale?: number;
  };
  export type replaySnapshot_Return = {
    /** A data: URL for resulting image. */
    dataURL: string;
  };
  export type snapshotCommandLog_Parameters = {
    /** The id of the layer snapshot. */
    snapshotId: SnapshotId;
  };
  export type snapshotCommandLog_Return = {
    /** The array of canvas function calls. */
    commandLog: any[];
  };
}
export class DeviceOrientation {
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Overrides the Device Orientation. */
  setDeviceOrientationOverride(params: DeviceOrientation.setDeviceOrientationOverride_Parameters): Promise<void> {
    return this._client.send<void>("DeviceOrientation.setDeviceOrientationOverride", params);
  }
  /** Clears the overridden Device Orientation. */
  clearDeviceOrientationOverride(): Promise<void> {
    return this._client.send<void>("DeviceOrientation.clearDeviceOrientationOverride");
  }
}
export namespace DeviceOrientation {
  export type setDeviceOrientationOverride_Parameters = {
    /** Mock alpha */
    alpha: number;
    /** Mock beta */
    beta: number;
    /** Mock gamma */
    gamma: number;
  };
}
export class ScreenOrientation {
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Overrides the Screen Orientation. */
  setScreenOrientationOverride(params: ScreenOrientation.setScreenOrientationOverride_Parameters): Promise<void> {
    return this._client.send<void>("ScreenOrientation.setScreenOrientationOverride", params);
  }
  /** Clears the overridden Screen Orientation. */
  clearScreenOrientationOverride(): Promise<void> {
    return this._client.send<void>("ScreenOrientation.clearScreenOrientationOverride");
  }
}
export namespace ScreenOrientation {
  /** Orientation type */
  export type OrientationType = "portraitPrimary" | "portraitSecondary" | "landscapePrimary" | "landscapeSecondary";
  export type setScreenOrientationOverride_Parameters = {
    /** Orientation angle */
    angle: number;
    /** Orientation type */
    type: OrientationType;
  };
}
export class Tracing {
  private _dataCollected: Tracing.dataCollected_Handler = undefined;
  private _tracingComplete: Tracing.tracingComplete_Handler = undefined;
  private _bufferUsage: Tracing.bufferUsage_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Start trace events collection. */
  start(params: Tracing.start_Parameters): Promise<void> {
    return this._client.send<void>("Tracing.start", params);
  }
  /** Stop trace events collection. */
  end(): Promise<void> {
    return this._client.send<void>("Tracing.end");
  }
  /** Gets supported tracing categories. */
  getCategories(): Promise<Tracing.getCategories_Return> {
    return this._client.send<Tracing.getCategories_Return>("Tracing.getCategories");
  }
  /** Request a global memory dump. */
  requestMemoryDump(): Promise<Tracing.requestMemoryDump_Return> {
    return this._client.send<Tracing.requestMemoryDump_Return>("Tracing.requestMemoryDump");
  }
  /** Contains an bucket of collected trace events. When tracing is stopped collected events will be send as a sequence of dataCollected events followed by tracingComplete event. */
  get dataCollected(): Tracing.dataCollected_Handler {
    return this._dataCollected;
  }
  set dataCollected(handler: Tracing.dataCollected_Handler) {
    if (this._dataCollected) {
      this._client.removeListener("Tracing.dataCollected", this._dataCollected);
    }
    this._dataCollected = handler;
    if (handler) {
      this._client.on("Tracing.dataCollected", handler);
    }
  }
  /** Signals that tracing is stopped and there is no trace buffers pending flush, all data were delivered via dataCollected events. */
  get tracingComplete(): Tracing.tracingComplete_Handler {
    return this._tracingComplete;
  }
  set tracingComplete(handler: Tracing.tracingComplete_Handler) {
    if (this._tracingComplete) {
      this._client.removeListener("Tracing.tracingComplete", this._tracingComplete);
    }
    this._tracingComplete = handler;
    if (handler) {
      this._client.on("Tracing.tracingComplete", handler);
    }
  }
  get bufferUsage(): Tracing.bufferUsage_Handler {
    return this._bufferUsage;
  }
  set bufferUsage(handler: Tracing.bufferUsage_Handler) {
    if (this._bufferUsage) {
      this._client.removeListener("Tracing.bufferUsage", this._bufferUsage);
    }
    this._bufferUsage = handler;
    if (handler) {
      this._client.on("Tracing.bufferUsage", handler);
    }
  }
}
export namespace Tracing {
  export type dataCollected_Parameters = {
    value: any[];
  };
  export type dataCollected_Handler = (params: dataCollected_Parameters) => void;
  export type tracingComplete_Parameters = {
    /** A handle of the stream that holds resulting trace data. */
    stream?: IO.StreamHandle;
  };
  export type tracingComplete_Handler = (params: tracingComplete_Parameters) => void;
  export type bufferUsage_Parameters = {
    /** A number in range [0..1] that indicates the used size of event buffer as a fraction of its total size. */
    percentFull?: number;
    /** An approximate number of events in the trace log. */
    eventCount?: number;
    /** A number in range [0..1] that indicates the used size of event buffer as a fraction of its total size. */
    value?: number;
  };
  export type bufferUsage_Handler = (params: bufferUsage_Parameters) => void;
  export type start_Parameters = {
    /** Category/tag filter */
    categories?: string;
    /** Tracing options */
    options?: string;
    /** If set, the agent will issue bufferUsage events at this interval, specified in milliseconds */
    bufferUsageReportingInterval?: number;
    /** Whether to report trace events as series of dataCollected events or to save trace to a stream (defaults to <code>ReportEvents</code>). */
    transferMode?: "ReportEvents" | "ReturnAsStream";
  };
  export type getCategories_Return = {
    /** A list of supported tracing categories. */
    categories: string[];
  };
  export type requestMemoryDump_Return = {
    /** GUID of the resulting global memory dump. */
    dumpGuid: string;
    /** True iff the global memory dump succeeded. */
    success: boolean;
  };
}
export class Animation {
  private _animationCreated: Animation.animationCreated_Handler = undefined;
  private _animationStarted: Animation.animationStarted_Handler = undefined;
  private _animationCanceled: Animation.animationCanceled_Handler = undefined;
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Enables animation domain notifications. */
  enable(): Promise<void> {
    return this._client.send<void>("Animation.enable");
  }
  /** Disables animation domain notifications. */
  disable(): Promise<void> {
    return this._client.send<void>("Animation.disable");
  }
  /** Gets the playback rate of the document timeline. */
  getPlaybackRate(): Promise<Animation.getPlaybackRate_Return> {
    return this._client.send<Animation.getPlaybackRate_Return>("Animation.getPlaybackRate");
  }
  /** Sets the playback rate of the document timeline. */
  setPlaybackRate(params: Animation.setPlaybackRate_Parameters): Promise<void> {
    return this._client.send<void>("Animation.setPlaybackRate", params);
  }
  /** Returns the current time of the an animation. */
  getCurrentTime(params: Animation.getCurrentTime_Parameters): Promise<Animation.getCurrentTime_Return> {
    return this._client.send<Animation.getCurrentTime_Return>("Animation.getCurrentTime", params);
  }
  /** Sets the paused state of a set of animations. */
  setPaused(params: Animation.setPaused_Parameters): Promise<void> {
    return this._client.send<void>("Animation.setPaused", params);
  }
  /** Sets the timing of an animation node. */
  setTiming(params: Animation.setTiming_Parameters): Promise<void> {
    return this._client.send<void>("Animation.setTiming", params);
  }
  /** Seek a set of animations to a particular time within each animation. */
  seekAnimations(params: Animation.seekAnimations_Parameters): Promise<void> {
    return this._client.send<void>("Animation.seekAnimations", params);
  }
  /** Releases a set of animations to no longer be manipulated. */
  releaseAnimations(params: Animation.releaseAnimations_Parameters): Promise<void> {
    return this._client.send<void>("Animation.releaseAnimations", params);
  }
  /** Gets the remote object of the Animation. */
  resolveAnimation(params: Animation.resolveAnimation_Parameters): Promise<Animation.resolveAnimation_Return> {
    return this._client.send<Animation.resolveAnimation_Return>("Animation.resolveAnimation", params);
  }
  /** Event for each animation that has been created. */
  get animationCreated(): Animation.animationCreated_Handler {
    return this._animationCreated;
  }
  set animationCreated(handler: Animation.animationCreated_Handler) {
    if (this._animationCreated) {
      this._client.removeListener("Animation.animationCreated", this._animationCreated);
    }
    this._animationCreated = handler;
    if (handler) {
      this._client.on("Animation.animationCreated", handler);
    }
  }
  /** Event for animation that has been started. */
  get animationStarted(): Animation.animationStarted_Handler {
    return this._animationStarted;
  }
  set animationStarted(handler: Animation.animationStarted_Handler) {
    if (this._animationStarted) {
      this._client.removeListener("Animation.animationStarted", this._animationStarted);
    }
    this._animationStarted = handler;
    if (handler) {
      this._client.on("Animation.animationStarted", handler);
    }
  }
  /** Event for when an animation has been cancelled. */
  get animationCanceled(): Animation.animationCanceled_Handler {
    return this._animationCanceled;
  }
  set animationCanceled(handler: Animation.animationCanceled_Handler) {
    if (this._animationCanceled) {
      this._client.removeListener("Animation.animationCanceled", this._animationCanceled);
    }
    this._animationCanceled = handler;
    if (handler) {
      this._client.on("Animation.animationCanceled", handler);
    }
  }
}
export namespace Animation {
  /** Animation instance. */
  export interface Animation {
    /** <code>Animation</code>'s id. */
    id: string;
    /** <code>Animation</code>'s internal paused state. */
    pausedState: boolean;
    /** <code>Animation</code>'s play state. */
    playState: string;
    /** <code>Animation</code>'s playback rate. */
    playbackRate: number;
    /** <code>Animation</code>'s start time. */
    startTime: number;
    /** <code>Animation</code>'s current time. */
    currentTime: number;
    /** <code>Animation</code>'s source animation node. */
    source: AnimationEffect;
    /** Animation type of <code>Animation</code>. */
    type: "CSSTransition" | "CSSAnimation" | "WebAnimation";
    /** A unique ID for <code>Animation</code> representing the sources that triggered this CSS animation/transition. */
    cssId?: string;
  }
  /** AnimationEffect instance */
  export interface AnimationEffect {
    /** <code>AnimationEffect</code>'s delay. */
    delay: number;
    /** <code>AnimationEffect</code>'s end delay. */
    endDelay: number;
    /** <code>AnimationEffect</code>'s playbackRate. */
    playbackRate: number;
    /** <code>AnimationEffect</code>'s iteration start. */
    iterationStart: number;
    /** <code>AnimationEffect</code>'s iterations. */
    iterations: number;
    /** <code>AnimationEffect</code>'s iteration duration. */
    duration: number;
    /** <code>AnimationEffect</code>'s playback direction. */
    direction: string;
    /** <code>AnimationEffect</code>'s fill mode. */
    fill: string;
    /** <code>AnimationEffect</code>'s name. */
    name: string;
    /** <code>AnimationEffect</code>'s target node. */
    backendNodeId: DOM.BackendNodeId;
    /** <code>AnimationEffect</code>'s keyframes. */
    keyframesRule?: KeyframesRule;
    /** <code>AnimationEffect</code>'s timing function. */
    easing: string;
  }
  /** Keyframes Rule */
  export interface KeyframesRule {
    /** CSS keyframed animation's name. */
    name?: string;
    /** List of animation keyframes. */
    keyframes: KeyframeStyle[];
  }
  /** Keyframe Style */
  export interface KeyframeStyle {
    /** Keyframe's time offset. */
    offset: string;
    /** <code>AnimationEffect</code>'s timing function. */
    easing: string;
  }
  export type animationCreated_Parameters = {
    /** Id of the animation that was created. */
    id: string;
  };
  export type animationCreated_Handler = (params: animationCreated_Parameters) => void;
  export type animationStarted_Parameters = {
    /** Animation that was started. */
    animation: Animation;
  };
  export type animationStarted_Handler = (params: animationStarted_Parameters) => void;
  export type animationCanceled_Parameters = {
    /** Id of the animation that was cancelled. */
    id: string;
  };
  export type animationCanceled_Handler = (params: animationCanceled_Parameters) => void;
  export type getPlaybackRate_Return = {
    /** Playback rate for animations on page. */
    playbackRate: number;
  };
  export type setPlaybackRate_Parameters = {
    /** Playback rate for animations on page */
    playbackRate: number;
  };
  export type getCurrentTime_Parameters = {
    /** Id of animation. */
    id: string;
  };
  export type getCurrentTime_Return = {
    /** Current time of the page. */
    currentTime: number;
  };
  export type setPaused_Parameters = {
    /** Animations to set the pause state of. */
    animations: string[];
    /** Paused state to set to. */
    paused: boolean;
  };
  export type setTiming_Parameters = {
    /** Animation id. */
    animationId: string;
    /** Duration of the animation. */
    duration: number;
    /** Delay of the animation. */
    delay: number;
  };
  export type seekAnimations_Parameters = {
    /** List of animation ids to seek. */
    animations: string[];
    /** Set the current time of each animation. */
    currentTime: number;
  };
  export type releaseAnimations_Parameters = {
    /** List of animation ids to seek. */
    animations: string[];
  };
  export type resolveAnimation_Parameters = {
    /** Animation id. */
    animationId: string;
  };
  export type resolveAnimation_Return = {
    /** Corresponding remote object. */
    remoteObject: Runtime.RemoteObject;
  };
}
export class Accessibility {
  private _client: IDebuggingProtocolClient = undefined;
  constructor(client: IDebuggingProtocolClient) {
    this._client = client;
  }
  /** Fetches the accessibility node for this DOM node, if it exists. */
  getAXNode(params: Accessibility.getAXNode_Parameters): Promise<Accessibility.getAXNode_Return> {
    return this._client.send<Accessibility.getAXNode_Return>("Accessibility.getAXNode", params);
  }
}
export namespace Accessibility {
  /** Unique accessibility node identifier. */
  export type AXNodeId = string;
  /** Enum of possible property types. */
  export type AXValueType = "boolean" | "tristate" | "booleanOrUndefined" | "idref" | "idrefList" | "integer" | "node" | "nodeList" | "number" | "string" | "computedString" | "token" | "tokenList" | "domRelation" | "role" | "internalRole" | "valueUndefined";
  /** Enum of possible property sources. */
  export type AXValueSourceType = "attribute" | "implicit" | "style" | "contents" | "placeholder" | "relatedElement";
  /** Enum of possible native property sources (as a subtype of a particular AXValueSourceType). */
  export type AXValueNativeSourceType = "figcaption" | "label" | "labelfor" | "labelwrapped" | "legend" | "tablecaption" | "title" | "other";
  /** A single source for a computed AX property. */
  export interface AXValueSource {
    /** What type of source this is. */
    type: AXValueSourceType;
    /** The value of this property source. */
    value?: AXValue;
    /** The attribute, if any. */
    attribute?: string;
    /** Whether this source is superseded by a higher priority source. */
    superseded?: boolean;
    /** The native markup source for this value, e.g. a <label> element. */
    nativeSource?: AXValueNativeSourceType;
    /** Whether the value for this property is invalid. */
    invalid?: boolean;
    /** Reason for the value being invalid, if it is. */
    invalidReason?: string;
  }
  export interface AXRelatedNode {
    /** The BackendNodeId of the related node. */
    backendNodeId: DOM.BackendNodeId;
    /** The IDRef value provided, if any. */
    idref?: string;
    /** The text alternative of this node in the current context. */
    text?: string;
  }
  export interface AXProperty {
    /** The name of this property. */
    name: string;
    /** The value of this property. */
    value: AXValue;
  }
  /** A single computed AX property. */
  export interface AXValue {
    /** The type of this value. */
    type: AXValueType;
    /** The computed value of this property. */
    value?: any;
    /** One or more related nodes, if applicable. */
    relatedNodes?: AXRelatedNode[];
    /** The sources which contributed to the computation of this property. */
    sources?: AXValueSource[];
  }
  /** States which apply to every AX node. */
  export type AXGlobalStates = "disabled" | "hidden" | "hiddenRoot" | "invalid";
  /** Attributes which apply to nodes in live regions. */
  export type AXLiveRegionAttributes = "live" | "atomic" | "relevant" | "busy" | "root";
  export type AXWidgetAttributes = "autocomplete" | "haspopup" | "level" | "multiselectable" | "orientation" | "multiline" | "readonly" | "required" | "valuemin" | "valuemax" | "valuetext";
  /** States which apply to widgets. */
  export type AXWidgetStates = "checked" | "expanded" | "pressed" | "selected";
  /** Relationships between elements other than parent/child/sibling. */
  export type AXRelationshipAttributes = "activedescendant" | "flowto" | "controls" | "describedby" | "labelledby" | "owns";
  /** A node in the accessibility tree. */
  export interface AXNode {
    /** Unique identifier for this node. */
    nodeId: AXNodeId;
    /** Whether this node is ignored for accessibility */
    ignored: boolean;
    /** Collection of reasons why this node is hidden. */
    ignoredReasons?: AXProperty[];
    /** This <code>Node</code>'s role, whether explicit or implicit. */
    role?: AXValue;
    /** The accessible name for this <code>Node</code>. */
    name?: AXValue;
    /** The accessible description for this <code>Node</code>. */
    description?: AXValue;
    /** The value for this <code>Node</code>. */
    value?: AXValue;
    /** All other properties */
    properties?: AXProperty[];
  }
  export type getAXNode_Parameters = {
    /** ID of node to get accessibility node for. */
    nodeId: DOM.NodeId;
  };
  export type getAXNode_Return = {
    /** The <code>Accessibility.AXNode</code> for this DOM node, if it exists. */
    accessibilityNode?: AXNode;
  };
}
