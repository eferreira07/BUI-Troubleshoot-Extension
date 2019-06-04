declare module ORACLE_SERVICE_CLOUD {
    var extension_loader: IExtensionLoader;
    var extensionLoadPromise: IExtensionPromise<any>;

    interface IExtensionLoader extends IExtensionDisposable {
        load(appId: string, version?: string, userScriptList?: string[]): IExtensionPromise<IExtensionProvider>;
    }

    interface IExtensionDisposable {
        dispose: () => void;
        disposeChild: (disposalKey: string) => void;
        getDisposalKey: () => string;
    }

    interface IFieldObject {
        label: string;
        value: any;
    }

    export interface ICurrency {
        id?: number;
        symbol?: string;
        value: number;
        abbreviation: string;
        decimalPrecision?: number;
        dataType: string;
    }

    export interface IStandardText {
        event: IEvent;
        standardText: string;
    }

    export interface IGlobalActionResult {
        result: any[];
    }

    export interface IStandardTextFocusChange {
        event: IEvent;
        newFocusId: string;
        focusChanged: boolean;
    }

    export interface IEvent {
        event: string;
        field?: string;
        value?: any;
        oldValue?: string;
        fields?: { [s: string]: any; };
        fieldObjects?: { [s: string]: IFieldObject; };
    }

    export interface IErrorData {
        getDesc(): string;
    }

    export interface IEventHandler {
        cancel(): void;
        isCancelled(): boolean;
    }

    export interface IWorkspaceRecordEventParameter {
        event: IEvent;
        getWorkspaceRecord(): IWorkspaceRecord;
        getCurrentEvent(): IEventHandler;
        newWorkspace?: IObjectDetail;
        oldWorkspace?: IObjectDetail;
        getField(fieldName: string): IFieldData;
    }

    export interface IWorkspaceOperationParameter {
        event: string;
        objectId: number;
        objectType: string;
    }

    export interface IBrowserControl {
        getId: () => string;
        getUrl: () => string;
        setUrl: (url: string) => void;
    }

    export interface IReportDefinition {
        getAcId: () => number;
        getName: () => string;
        getRowLimit: () => number;
        getDisplayOptions: () => IReportDisplayDefinition;
        setDisplayOptions: (reportDisplayOptions: IReportDisplayDefinition) => void;
        getColumnDefinitions: () => IReportColumnDefinition[];
    }
    export interface IReportColumnDefinition {
        getColumnReference: () => string;
        getSortDirection: () => string;
        getSortOrder: () => number;
        getColumnName: () => string;
        setSortOrder: (sortOrder: number) => void;
        setSortDirection: (sortDirection: string) => void;
        getColumnOrder: () => number;
        getDisplayOptions: () => IReportColumnDisplayDefinition;
        setDisplayOptions: (columnDisplayoptions: IReportColumnDisplayDefinition) => void;
    }
    export interface IReportDisplayDefinition {
        showColumnsInMultipleLine(showAllColumnsMultLine: boolean): void;
        canShowColumnsInMultipleLine(): boolean;
        hideColumnHeaders(hideColumnHeaders: boolean): void;
        canHideColumnHeaders(): boolean;
        //hideReportCommands(hideReportCommands: boolean);
        canHideReportCommands(): boolean;
        //hideReportToolBar(hideReportToolBar: boolean);
        canHideReportToolBar(): boolean;
    }
    export interface IReportColumnDisplayDefinition {
        canWrapData(): boolean;
        wrapData(wrapData: boolean): void;
        canDisplayMoreLink(): boolean;
        displayMoreLink(displayMoreLink: boolean): void;
    }
    export interface IReportColumnDetails {
        header: string;
        columnReference: string;
        sortOrder: number;
        sortDirection: string;
        dataOrder: number;
        formatOptions: string[];
    }
    export interface IExtensionFilter {
        getFilterId: () => number;
        getDataType: () => any;
        getOperatorType: () => any;
        getFilterType: () => string;
        getAppliesTo: () => string;
        getPrompt: () => string;
        getHierFlat: () => boolean;
        getColumnReference: () => string;
        setValue: (value: any) => void;
        getValue: () => any;
    }

    export interface IExtensionReport {
        getReportDefinition: () => IReportDefinition;
        getReportFilters: () => IExtensionFilterDetails;
        getReportData: () => IReportData;
        getRelatedEntities: () => IReportRelatedEntityDetails[];
        getReportWorkspaceContext: () => IReportWorkspaceContextDetails;
        getRelatedEntity(entityType: string): IReportRelatedEntityDetails;
        createReportData: () => IReportData;
        createReportDataRow: () => IReportDataRow;
        createReportDataCell: () => IReportDataCell;
        setDataHandler(dataHandler: (param: any) => void): void;
        executeReport: (configuration? : IReportConfiguration) => void;
        getExtensionReportId(): string;
        createReportConfiguration() : IReportConfiguration;
    }
    export interface IExtensionFilterDetails {
        getFilterList: () => IExtensionFilter[];
        getRowsPerPage: () => number;
        setRowsPerPage: (rowsPerPage: number) => void;
        getPageNumber: () => number;
        setPageNumber: (pageNumber: number) => void;
    }
    export interface IReportRelatedEntity {
        entityType: string;
        relatedFields: IReportRelatedField[];
    }
    export interface IReportRelatedField {
        fieldName: string;
        fieldValue: any;
    }
    export interface IReportRelatedEntityDetails {
        getEntityType: () => string;
        getRelatedFieldValues: () => IReportRelatedFieldDetails[];
    }
    export interface IReportRelatedFieldDetails {
        getFieldName: () => string;
        getFieldValue: () => any;
    }
    export interface IReportWorkspaceContext {
        objectType: string;
        objectId: number;
    }

    export interface IReportWorkspaceContextDetails {
        getObjectType(): string;
        getObjectId(): number;
    }

    export interface IExtensionRangeFilter extends IExtensionFilter {
        getFilterStartValue: () => any;
        setFilterStartValue: (startValue: any) => void;
        getFilterEndValue: () => any;
        setFilterEndValue: (endValue: any) => void;

    }

    export interface IObjectDetail {
        objectId: number;
        objectType: string;
        contextId: string;
    }

    export interface IReportConfiguration{
        setUserInterface: (userInterface: IUserInterface) => void;
        setTitle: (title: string) => void;
        setWidth: (width: string) => void;
        setHeight: (height: string) => void;
    }

    export interface ITabChangeEventParameter {
        newWorkspace?: IObjectDetail;
        oldWorkspace?: IObjectDetail;
    }

    export interface IWorkspaceRecord {
        addNote(): IExtensionPromise<INoteEntry>;
        getWorkspaceRecordType(): string;
        getWorkspaceRecordId(): number;
        getSubscriptionPriority(): number;
        getCurrentWorkspace(): IObjectDetail;
        closeEditor(): IExtensionPromise<ORACLE_SERVICE_CLOUD.IWorkspaceOperationParameter>;
        editWorkspaceRecord(workspaceType: string, objectId: number, callbackFunctionReference?: (param: IWorkspaceRecord) => void): IExtensionPromise<IWorkspaceRecord>;
        createWorkspaceRecord(objectType: string, callbackFunctionReference?: (param: IWorkspaceRecord) => void): IExtensionPromise<IWorkspaceRecord>;
        deleteWorkspaceRecord(objectType: string, objectId: number, callbackFunctionReference?: (param: IWorkspaceOperationParameter) => void): IExtensionPromise<IWorkspaceOperationParameter>;
        executeEditorCommand(command: string, callbackFunctionReference?: (param: ORACLE_SERVICE_CLOUD.IWorkspaceRecord) => void): IExtensionPromise<IWorkspaceRecord>;
        isEditorCommandAvailable(command: string): boolean;
        getAllBrowserControls(): ORACLE_SERVICE_CLOUD.IBrowserControl[];
        addFieldValueListener(fieldName: string, functionRef: (param: IWorkspaceRecordEventParameter) => void, context?: any): IWorkspaceRecord;
        addEditorLoadedListener(callbackFunctionReference: (param: IWorkspaceRecordEventParameter) => void, context?: any): ORACLE_SERVICE_CLOUD.IWorkspaceRecord;
        addDataLoadedListener(callbackFunctionReference: (param: IWorkspaceRecordEventParameter) => void, context?: any): ORACLE_SERVICE_CLOUD.IWorkspaceRecord;
        addExtensionLoadedListener(callbackFunctionReference: (param: IWorkspaceRecordEventParameter) => void, context?: any): ORACLE_SERVICE_CLOUD.IWorkspaceRecord;
        addRecordSavingListener(callbackFunctionReference: (param: IWorkspaceRecordEventParameter) => void, context?: any): ORACLE_SERVICE_CLOUD.IWorkspaceRecord;
        addRecordSavedListener(callbackFunctionReference: (param: IWorkspaceRecordEventParameter) => void, context?: any): ORACLE_SERVICE_CLOUD.IWorkspaceRecord;
        addRecordClosingListener(callbackFunctionReference: (param: IWorkspaceRecordEventParameter) => void, context?: any): ORACLE_SERVICE_CLOUD.IWorkspaceRecord;
        addCurrentEditorTabChangedListener(callbackFunctionReference: (param: IWorkspaceRecordEventParameter) => void, context?: any): ORACLE_SERVICE_CLOUD.IWorkspaceRecord;
        setFieldHidden(fieldName: string): void;
        setFieldVisible(fieldName: string): void;
        setFieldReadOnly(fieldName: string): void;
        setFieldEditable(fieldName: string): void;
        setFieldRequired(fieldName: string): void;
        setFieldOptional(fieldName: string): void;
        setAppendedValue(fieldName: string, value: string): void;
        setPrependedValue(fieldName: string, value: string): void;
        updateField(fieldName: string, value: string): IExtensionPromise<IWorkspaceRecord>;
        updateFieldByLabel(fieldName: string, value: string): IExtensionPromise<IWorkspaceRecord>;
        includeMenuItems(fieldName: string, menuItems: any[]): IExtensionPromise<IWorkspaceRecord>;
        includeAllMenuItems(fieldName: string): IExtensionPromise<IWorkspaceRecord>;
        excludeMenuItems(fieldName: string, menuItems: any[]): IExtensionPromise<IWorkspaceRecord>;
        findAndFocus(workspaceType: string, workspaceRecordId: number, callbackFunctionReference?: (param: ORACLE_SERVICE_CLOUD.IWorkspaceRecord) => void): boolean;
        isEditorOpen(workspaceType: string, workspaceRecordId: number): boolean;
        addNamedEventListener(eventName: string, callbackFunctionReference: (param: ORACLE_SERVICE_CLOUD.IWorkspaceRecordEventParameter) => void, context?: any): ORACLE_SERVICE_CLOUD.IWorkspaceRecord;
        triggerNamedEvent(eventName: string): void;
        prefetchWorkspaceFields(fieldNameArr: string[], isLabelsRequired?: boolean): ORACLE_SERVICE_CLOUD.IWorkspaceRecord;
        getFieldValues(fieldNameArr: string[], isLabelsRequired?: boolean): IExtensionPromise<IFieldDetails>;
        dispose(): void;
        getContextId(): string;
        getCurrentAttachmentContext(): IExtensionPromise<IAttachmentContext>;
    }

    export interface IExtensionProvider extends IExtensionDisposable {
        getApplicationId(): string;
        registerWorkspaceExtension(userFunction: (param: IWorkspaceRecord) => void, objectType?: string, objectId?: number): void;
        registerAnalyticsExtension?(userFunction: (param: ORACLE_SERVICE_CLOUD.IAnalyticsContext) => void, objectId?: number, objectType?: string): void;
        getGlobalContext?(): ORACLE_SERVICE_CLOUD.IExtensionPromise<IExtensionGlobalContext>;
        changeSubscriptionPriority(priority: number): void;
        getSubscriptionPriority(): number;
        registerUserInterfaceExtension(userFunction: (param: IUserInterfaceContext) => void): void;
        getLogger(loggerName?: string): IExtensionLogger;
    }

    export interface IExtensionLogger {
        trace(message: string): void;
        debug(message: string): void;
        info(message: string): void;
        warn(message: string): void;
        error(message: string): void;
    }

    export interface IAnalyticsContext {
        createReport(reportId: number): IExtensionPromise<IExtensionReport>;
        addTableDataRequestListener(tableName: string, callback: (param: IExtensionReport) => any): IAnalyticsContext;
        createRecordCommandContext(commandName : string) : IRecordCommandContext;
        registerRecordCommand(commandContext : IRecordCommandContext) : IAnalyticsContext;
        createIcon() : IIcon;
    }

    export interface IRecordCommandContext {
        setIcon(iconClass: IIcon) : void;
        setLabel(label : string) : void;
        setTooltip(tooltip : string) : void;
        setReportId(reportId: number): void;
        setRecordId(recordId: number): void;
        setRecordCommandReportType(recordCommandReportType: string): void;
        showAsLink(isLink : boolean): void;
        showLinkAsIcon(showLinkIcon: boolean): void;
        //addValidatorCallback(callbackFunction :(param: [IReportRow]) => any);
        //addExecutorCallback(callbackFunction :(param: [IReportRow]) => any);
        //addInjectionValidatorCallback(callbackFunction :(param: IReportInfo) => any);
    }

    export interface IIcon {
        setIconClass(iconClass: string) : void;
        setIconColor(color: string) : void;
    }

    export interface IReportRow {
         getRowId() : number;
         getCells() : IReportCell[];
         getRecords(): IReportRecord[];
    }

    export interface IReportCell {
        getName() : string;
        getValue() : any;
        getDisplayValue() : string;
    }

    export interface IReportInfo {
        getReportId(): number;
        getExtensionReportId(): string;
        getCommandName(): string;
    }

    export interface IReportRecord {
        getRecordType() : string;
        getRecordId() : number;
    }
    export interface IAttachment {
        getName(): string;
        getFileId(): string;
        getType(): string;
        getSize(): string;
    }

    export interface IAttachmentContext {
        getAttachments(): IExtensionPromise<IAttachment[]>;
        getAttachmentsFrom(entityType: string, entityId: string): IExtensionPromise<IAttachment[]>;
        displayAttachmentDialog(): IExtensionPromise<IWorkspaceRecord>;
        uploadAttachment(attachment: IAttachment): IExtensionPromise<IWorkspaceRecord>;
        attachFromUrl(fileName: string, url: string): IExtensionPromise<IWorkspaceRecord>;
    }

    export interface IExtensionPromise<T> {
        then(onCompleted: (sdk: T) => void, onRejected?: (param: ORACLE_SERVICE_CLOUD.IErrorData) => void): ORACLE_SERVICE_CLOUD.IExtensionPromise<T>;
        catch(onRejected: (param: ORACLE_SERVICE_CLOUD.IErrorData) => void): void;
    }

    export interface IFieldDetails {
        getField(fieldName: string): IFieldData;
    }

    export interface IFieldData {
        getLabel(): string;
        getValue(): any;
    }
    export interface IIncidentWorkspaceRecord extends IWorkspaceRecord {
        getCurrentEditedThread(entryType: string, isNew: boolean): IExtensionPromise<IThreadEntry>;
        getThreadEntryTypes(): string[];
    }

    export interface IThreadEntry {
        getThreadId(): string;
        getContent(): string;
        getEntryType(): string;
        getChannelType(): string;
        isDraft(): boolean;
        setContent(content: string): IExtensionPromise<any>;
        delete(): IExtensionPromise<any>;
        addFieldValueListener(fieldName: string, callback: (param: IWorkspaceRecordEventParameter) => void, callbackContext?: any): IThreadEntry;
    }

    export interface INoteEntry {
        getChannelId(): number;
        getCreated(): Date;
        getCreatedBy(): number;
        getContent(): string;
        getNoteId(): string;
        getSeq(): string;
        getUpdated(): Date;
        getUpdatedBy(): number;
        setChannelId(channelId: number): void;
        setContent(content: string): void;
        apply(): IExtensionPromise<INoteEntry>;
        addFieldValueListener(fieldName: string, callback: (param: IWorkspaceRecordEventParameter) => void, callbackContext?: any): INoteEntry;
        delete(): IExtensionPromise<INoteEntry>;
    }

    export interface IMenuErrorData extends IErrorData {
        getRejectedIDs(): number[];
    }

    export interface IUserInterfaceContext {
        getContentPaneContext(): IExtensionPromise<IContentPaneContext>;
        getGlobalHeaderContext(): IExtensionPromise<IGlobalHeaderContext>;
        getLeftSidePaneContext(): IExtensionPromise<ISidePaneContext>;
        getRightSidePaneContext(): IExtensionPromise<ISidePaneContext>;
        getStatusBarContext(): IExtensionPromise<IStatusBarContext>;
        getNavigationSetContext(): IExtensionPromise<INavigationSetContext>;
        getModalWindowContext(): IExtensionPromise<IModalWindowContext>;
        getPopupWindowContext(): IExtensionPromise<IPopupWindowContext>;
        getExtensionBarContext(): IExtensionPromise<IExtensionBarContext>;
        getNotificationContext(): IExtensionPromise<INotificationContext>;
        getStandardTextContext(): IExtensionPromise<IStandardTextContext>;
    }
    export interface IUserInterface {
        getId(): string;
        getUIType(): string;
    }

    export interface ISidePaneContext {
        getSidePane(id: string, groupId?: string): IExtensionPromise<ISidePane>;
        fetchGroupedSidePaneAttributes(groupId: string): IExtensionPromise<IGroupSidePaneAttributes>;
    }

    export interface IStandardTextContext {
        getStandardTextPane(): IExtensionPromise<IStandardTextPane>;
    }

    export interface IContentPaneContext {
        createContentPane(): IExtensionPromise<IContentPane>;
    }

    export interface IStatusBarContext {
        getStatusBarItem(id: string): IExtensionPromise<IStatusBarItem>;
    }

    export interface INavigationSetContext {
        getNavigationItem(id: string): IExtensionPromise<INavigationItem>;
        getNavigationList(): IExtensionPromise<INavigationItem[]>;
    }

    export interface IGlobalHeaderContext {
        getMenu(id: string): IExtensionPromise<IGlobalHeaderMenu>;
    }

    export interface IGlobalHeaderMenuItem {
        getLabel(): string;
        setLabel(label: string): void;
        setHandler(callback: (globalHeaderMenuItem: IGlobalHeaderMenuItem) => void): void;
        getHandler(): (globalHeaderMenuItem: IGlobalHeaderMenuItem) => void;
    }

    export interface IGlobalHeaderMenu extends IUserInterface {
        getLabel(): string;
        setLabel(label: string): void;
        isDisabled(): boolean;
        setDisabled(disabled: boolean): void;
        addMenuItem(menuItem: IGlobalHeaderMenuItem): void;
        createMenuItem(): IGlobalHeaderMenuItem;
        render(): void;
    }
    export interface IContentPane extends IWorkspaceRecord, IUserInterface {
        setContentUrl(url: string): void;
        setName(name: string): void;
        getName(): string;
        getContentUrl(): string;
    }

    export interface ISidePane extends IUserInterface {
        getLabel(): string;
        setLabel(label: string): void;
        isDisabled(): boolean;
        setDisabled(disabled: boolean): void;
        getContentUrl(): string;
        setContentUrl(contentUrl: string): void;
        isExpanded(): boolean;
        getGroupId(): string;
        expand(): void;
        collapse(): void;
        render(): void;
        activate(): void;
        dispose(): void;
    }

    export interface IGroupSidePaneAttributes {
        getGroupId(): string;
        getType(): string;
        isOpen(): boolean;
    }

    export interface IStandardTextDataNode {
        getLabel(): string;
        getChildren(): IStandardTextDataNode[];
        getValue(): number;
        getHotKey(): string;
        isCsrContentType(): boolean;
        isWorkflowContentType(): boolean;
        isLiveContentType(): boolean;
        isLiveUrlContentType(): boolean;
        isFolderType(): boolean;
    }

    export interface IStandardTextPane {
        setFilterHandler(handler: (standardTextDataNode: IStandardTextDataNode[]) => IStandardTextDataNode[]): void;
        getFilterHandler(): (standardTextDataNode: IStandardTextDataNode[]) => IStandardTextDataNode[];
        setSelectionHandler(handler: (param: IStandardText) => void): void;
        getSelectionHandler(): (param: IStandardText) => void;
        setFocusChangedHandler(handler: (param: IStandardTextFocusChange) => void): void;
        getFocusChangedHandler(): (param: IStandardTextFocusChange) => void;
        setLabel(label: string): void;
        getLabel(): string;
        setStandardTextContentTypes(contentType: string[]): void;
        getStandardTextContentTypes(): string[];
        render(): IExtensionPromise<any>;
        renderHotKeyDialog(): void;
        dispose(): void;
        disableAddMessage(): void;
        enableAddMessage(): void;
    }

    export interface IStatusBarItem extends IUserInterface {
        getLabel(): string;
        setLabel(label: string): void;
        isVisible(): boolean;
        setVisible(disabled: boolean): void;
        getContentUrl(): string;
        setContentUrl(contentUrl: string): void;
        getWidth(): string;
        setWidth(width: string): void;
        render(): void;
    }

    export interface IStandardTextItem{
        getId(): number;
        getName(): string;
        getContent(): IExtensionPromise<string>;
    }
    export interface INavigationItem extends IExtensionDisposable, IUserInterface {
        getLabel(): string;
        createChildItem(): INavigationItem;
        addChildItem(child: INavigationItem): void;
        getChildren(): IExtensionPromise<INavigationItem[]>;
        setLabel(text: string): void;
        setHandler(handler: (data: INavigationItem) => void): void;
        render(): void;
    }
    export interface IReportDataCell {
        data: any;
        getData(): any;
        setData(data: any): void;
    }
    export interface IReportDataRow {
        cells: IReportDataCell[];
        getCells(): IReportDataCell[];
    }
    export interface IReportData {
        rows: IReportDataRow[];
        getTotalRecordCount(): number;
        setTotalRecordCount(count: number): void;
        getRows(): IReportDataRow[];
    }

    export interface IExtensionGlobalContext {
        getProfileId(): number;
        getProfileName(): string;
        getInterfaceId(): number;
        getInterfaceName(): string;
        getInterfaceUrl(): string;
        getAccountId(): number;
        getLanguageId(): number;
        getLanguage(): string;
        getInterfaceServiceUrl(connectServiceType: string): string;
        getLogin(): string;
        getSessionToken(): IExtensionPromise<String>;
        getStandardTextItemById(id: number): IExtensionPromise<IStandardTextItem>;
        getStandardTextItemByName(name: string): IExtensionPromise<IStandardTextItem[]>;
        getStandardTextList(startIndex?: number, limit?: number): IExtensionPromise<IStandardTextItem[]>;
        registerAction(actionName: string, callbackFunction: (param: any) => any): void;
        invokeAction(actionName: string, param?: any): IExtensionPromise<IGlobalActionResult>;
    }
    export interface IModalWindowContext {
        createModalWindow(): IModalWindow;
        getCurrentModalWindow(): IExtensionPromise<IModalWindow>;

    }
    export interface IModalWindow extends IUserInterface {
        getTitle(): string;
        setTitle(title: string): void;
        setContentUrl(url: string): void;
        setWidth(width: string): void;
        setHeight(height: string): void;
        setClosable(isClosable: boolean): void;
        render(): IExtensionPromise<IModalWindow>;
        close(): IExtensionPromise<any>;
    }
    export interface IPopupWindowContext {
        createPopupWindow(id: string): IPopupWindow;
        getCurrentPopupWindows(): IExtensionPromise<IPopupWindow[]>;

    }
    export interface IPopupWindow extends IUserInterface {
        setContentUrl(url: string): void;
        setWidth(width: string): void;
        setHeight(height: string): void;
        setClosable(isClosable: boolean): void;
        setTitle(title: string): void;
        render(): IExtensionPromise<IPopupWindow>;
        close(): IExtensionPromise<any>;
    }
    export interface IExtensionBarItem extends IUserInterface {
        setContentUrl(url: string): void;
        setWidth(width: number): void;
        setHeight(height: number): void;
        getContentUrl(): string;
        getWidth(): number;
        getHeight(): number;
        render(): void;
    }

    export interface IExtensionBarContext {
        getExtensionBarItem(id: string): IExtensionPromise<IExtensionBarItem>;
        getAllExtensionBarItems(): IExtensionPromise<IExtensionBarItem[]>;
        getDefaultDockingPosition(): string;
        getDockingPosition(): string;
        isDockable(): boolean;
        setDockable(dockable: boolean): void;
        setDockingPosition(dockingPosition: string): void;
        setDefaultDockingPosition(dockingPosition: string): void;
        render(): void;
    }

    export interface INotificationContext {
        createNotificationConfig(): INotificationConfig;
        showNotification(notificationConfig: INotificationConfig): IExtensionPromise<void>;
    }

    export interface INotificationConfig {
        getMessage(): string;
        setMessage(message: string): void;
        getDuration(): number;
        setDuration(duration: number): void;
        getIconUrl(): string;
        setIconUrl(iconUrl: string): void;
        getActions(): INotificationAction[];
        addAction(action: INotificationAction): void;
        createAction(): INotificationAction;
        addClosedListener(handler: (config: INotificationConfig) => void): void;
        getClosedListeners(): ((config: INotificationConfig) => void)[];
        getPriority(): number;
        setPriority(priority: number): void;
    }
    export interface INotificationAction {
        getLabel(): string;
        setLabel(label: string): void;
        getHandler(): (notificationAction: INotificationAction) => void;
        setHandler(action: (action: INotificationAction) => void): void;
    }
}

declare type IExtensionLoader = ORACLE_SERVICE_CLOUD.IExtensionLoader;
declare type IExtensionDisposable = ORACLE_SERVICE_CLOUD.IExtensionDisposable;
declare type IFieldObject = ORACLE_SERVICE_CLOUD.IFieldObject;
declare type IEvent = ORACLE_SERVICE_CLOUD.IEvent;
declare type IErrorData = ORACLE_SERVICE_CLOUD.IErrorData;
declare type IEventHandler = ORACLE_SERVICE_CLOUD.IEventHandler;
declare type IWorkspaceRecordEventParameter = ORACLE_SERVICE_CLOUD.IWorkspaceRecordEventParameter;
declare type IWorkspaceOperationParameter = ORACLE_SERVICE_CLOUD.IWorkspaceOperationParameter;
declare type IBrowserControl = ORACLE_SERVICE_CLOUD.IBrowserControl;
declare type IReportDefinition = ORACLE_SERVICE_CLOUD.IReportDefinition;
declare type IReportColumnDefinition = ORACLE_SERVICE_CLOUD.IReportColumnDefinition;
declare type IReportColumnDetails = ORACLE_SERVICE_CLOUD.IReportColumnDetails;
declare type IExtensionReport = ORACLE_SERVICE_CLOUD.IExtensionReport;
declare type IExtensionFilterDetails = ORACLE_SERVICE_CLOUD.IExtensionFilterDetails;
declare type IReportRelatedEntity = ORACLE_SERVICE_CLOUD.IReportRelatedEntity;
declare type IReportRelatedField = ORACLE_SERVICE_CLOUD.IReportRelatedField;
declare type IReportRelatedEntityDetails = ORACLE_SERVICE_CLOUD.IReportRelatedEntityDetails;
declare type IReportRelatedFieldDetails = ORACLE_SERVICE_CLOUD.IReportRelatedFieldDetails;
declare type IReportWorkspaceContext = ORACLE_SERVICE_CLOUD.IReportWorkspaceContext;
declare type IReportWorkspaceContextDetails = ORACLE_SERVICE_CLOUD.IReportWorkspaceContextDetails;
declare type IExtensionFilter = ORACLE_SERVICE_CLOUD.IExtensionFilter;
declare type IExtensionRangeFilter = ORACLE_SERVICE_CLOUD.IExtensionRangeFilter;
declare type IObjectDetail = ORACLE_SERVICE_CLOUD.IObjectDetail;
declare type ITabChangeEventParameter = ORACLE_SERVICE_CLOUD.ITabChangeEventParameter;
declare type IWorkspaceRecord = ORACLE_SERVICE_CLOUD.IWorkspaceRecord;
declare type IExtensionProvider = ORACLE_SERVICE_CLOUD.IExtensionProvider;
declare type IAnalyticsContext = ORACLE_SERVICE_CLOUD.IAnalyticsContext;
declare type IExtensionPromise<T> = ORACLE_SERVICE_CLOUD.IExtensionPromise<T>;
declare type IFieldData = ORACLE_SERVICE_CLOUD.IFieldData;
declare type IIncidentWorkspaceRecord = ORACLE_SERVICE_CLOUD.IIncidentWorkspaceRecord;
declare type IThreadEntry = ORACLE_SERVICE_CLOUD.IThreadEntry;
declare type INoteEntry = ORACLE_SERVICE_CLOUD.INoteEntry;
declare type IMenuErrorData = ORACLE_SERVICE_CLOUD.IMenuErrorData;
declare type IUserInterfaceContext = ORACLE_SERVICE_CLOUD.IUserInterfaceContext;
declare type ISidePaneContext = ORACLE_SERVICE_CLOUD.ISidePaneContext;
declare type IContentPaneContext = ORACLE_SERVICE_CLOUD.IContentPaneContext;
declare type IStatusBarContext = ORACLE_SERVICE_CLOUD.IStatusBarContext;
declare type INavigationSetContext = ORACLE_SERVICE_CLOUD.INavigationSetContext;
declare type IGlobalActionResult = ORACLE_SERVICE_CLOUD.IGlobalActionResult;
declare type IGlobalHeaderContext = ORACLE_SERVICE_CLOUD.IGlobalHeaderContext;
declare type IGlobalHeaderMenuItem = ORACLE_SERVICE_CLOUD.IGlobalHeaderMenuItem;
declare type IGlobalHeaderMenu = ORACLE_SERVICE_CLOUD.IGlobalHeaderMenu;
declare type IContentPane = ORACLE_SERVICE_CLOUD.IContentPane;
declare type ISidePane = ORACLE_SERVICE_CLOUD.ISidePane;
declare type IStatusBarItem = ORACLE_SERVICE_CLOUD.IStatusBarItem;
declare type INavigationItem = ORACLE_SERVICE_CLOUD.INavigationItem;
declare type IReportDataCell = ORACLE_SERVICE_CLOUD.IReportDataCell;
declare type IReportDataRow = ORACLE_SERVICE_CLOUD.IReportDataRow;
declare type IReportData = ORACLE_SERVICE_CLOUD.IReportData;
declare type IExtensionGlobalContext = ORACLE_SERVICE_CLOUD.IExtensionGlobalContext;
declare type IModalWindowContext = ORACLE_SERVICE_CLOUD.IModalWindowContext;
declare type IModalWindow = ORACLE_SERVICE_CLOUD.IModalWindow;
declare type IPopupWindowContext = ORACLE_SERVICE_CLOUD.IPopupWindowContext;
declare type IPopupWindow = ORACLE_SERVICE_CLOUD.IPopupWindow;
declare type IExtensionBarItem = ORACLE_SERVICE_CLOUD.IExtensionBarItem;
declare type IExtensionBarContext = ORACLE_SERVICE_CLOUD.IExtensionBarContext;
declare type IStandardTextItem = ORACLE_SERVICE_CLOUD.IStandardTextItem;
declare type INotificationContext = ORACLE_SERVICE_CLOUD.INotificationContext;
declare type INotificationConfig = ORACLE_SERVICE_CLOUD.INotificationConfig;
declare type INotificationAction = ORACLE_SERVICE_CLOUD.INotificationAction;
declare type IExtensionLogger = ORACLE_SERVICE_CLOUD.IExtensionLogger;
declare var ExtensionPromise: { new(handler?: ((resolve: any, reject: any) => void)): IExtensionPromise<any>; };
declare type IStandardText = ORACLE_SERVICE_CLOUD.IStandardText;
declare type IStandardTextFocusChange = ORACLE_SERVICE_CLOUD.IStandardTextFocusChange;
declare type IStandardTextContext = ORACLE_SERVICE_CLOUD.IStandardTextContext;
declare type IStandardTextPane = ORACLE_SERVICE_CLOUD.IStandardTextPane;
declare type IStandardTextDataNode = ORACLE_SERVICE_CLOUD.IStandardTextDataNode;
declare type IRecordCommandContext = ORACLE_SERVICE_CLOUD.IRecordCommandContext;
declare type IReportRow = ORACLE_SERVICE_CLOUD.IReportRow;
declare type IReportCell = ORACLE_SERVICE_CLOUD.IReportCell;
declare type IReportRecord = ORACLE_SERVICE_CLOUD.IReportRecord;
declare type IIcon = ORACLE_SERVICE_CLOUD.IIcon;
declare type IReportConfiguration = ORACLE_SERVICE_CLOUD.IReportConfiguration;
declare type IGroupSidePaneAttributes = ORACLE_SERVICE_CLOUD.IGroupSidePaneAttributes;
declare type IReportInfo = ORACLE_SERVICE_CLOUD.IReportInfo;
