    public long modelPtr;
    public Model(ModelConfig config, Package archive) {
        modelPtr = Model_createModel(config, archive);
    private native long Model_createModel(ModelConfig config, Package archive);