
  // Constructor
  public ModelConfig(
      long encoder_layers,
      long decoder_layers,
      long feed_forward_depth,
      long num_heads,
      String split_mode) {
    this.encoder_layers = encoder_layers;
    this.decoder_layers = decoder_layers;
    this.feed_forward_depth = feed_forward_depth;
    this.num_heads = num_heads;
    this.split_mode = split_mode;
  }