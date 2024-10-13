        ...     ]),
        ...     confidence=array([ 0.9, 0.9, 0.8, 0.8 ]),
        ...     ]),
        ...     confidence=array([ 0.8 ]),

            target_path: save location of confusion matrix plot.
            title: title displayed at the top of the confusion matrix plot. Default `None`.
            class_names: list of class names detected my model. If non given class indexes will be used. Default `None`.
            normalize: chart will display absolute number of detections falling into given category. Otherwise percentage of detections will be displayed.
        import matplotlib.pyplot as plt
        from matplotlib import rcParams
        # rcParams["font.family"] = "sans-serif"
        # rcParams["font.sans-serif"] = ["Verdana"]
        fig, ax = plt.subplots(figsize=(12, 10), tight_layout=True, facecolor="white")
        # sn.set(font_scale=1.0 if self.num_classes < 50 else 0.8)
        # sn.heatmap(
        #     array,
        #     annot=self.num_classes < 30,
        #     annot_kws={"size": 8},
        #     fmt=".2f",
        #     square=True,
        #     vmin=0,
        #     cmap="Blues",
        #     xticklabels=x_tick_labels,
        #     yticklabels=y_tick_labels,
        # ).set_facecolor((1, 1, 1))
        im = ax.imshow(array, cmap="Blues")
        # Create colorbar
        cbar_kw = {}
        cbarlabel = ""
        cbar = ax.figure.colorbar(im, ax=ax, **cbar_kw)
        cbar.ax.set_ylabel(cbarlabel, rotation=-90, va="bottom")
        cbar.mappable.set_clim(vmin=0, vmax=np.nanmax(array))
        # Disable grid lines in the axis
        ax.grid(False)

        # Adjust the z-order of the grid lines
        ax.set_axisbelow(True)
        ax.yaxis.grid(color='gray', zorder=0)
        ax.xaxis.grid(color='gray', zorder=0)

        # Show all ticks and label them with the respective list entries.
        ax.set_xticks(np.arange(array.shape[1])-0.5)
        ax.set_yticks(np.arange(array.shape[0])-0.5)
        # ax.grid(which="major", color="gray", linestyle="-", linewidth=1)
        # ax.tick_params(which="minor", bottom=False, left=False)

        # Let the horizontal axes labeling appear on top.
        # ax.tick_params(top=True, bottom=False, labeltop=True, labelbottom=False)

        # Rotate the tick labels and set their alignment.
        plt.setp(ax.get_xticklabels(), rotation=90, ha="right", rotation_mode="anchor")

        # Turn spines off and create white grid.
        # ax.spines[:].set_visible(False)

        # ax.set_xticks(x_tick_labels, minor=True)
        # ax.set_yticks(y_tick_labels, minor=True)
        # ax.grid(which="minor", color="w", linestyle="-", linewidth=1)
        # ax.tick_params(which="minor", bottom=False, left=False)
            ax.set_title(title, fontsize=20)
        ax.set_xlabel("Predicted")
        ax.set_ylabel("True")
        ax.set_facecolor("white")