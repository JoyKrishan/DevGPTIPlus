        save_path: str,
        rcParams["font.family"] = "sans-serif"
        rcParams["font.sans-serif"] = ["Verdana"]
        # num_classes = self.num_classes + 1
        num_classes = 21
        class_names = class_names[:20]
        array = array[:20, :20]
        array[0, 0] = 10
        array[1, 8] = 15
        array[2, 9] = 20
        array[3, 10] = 25
        array[4, 11] = 10
        array[5, 12] = 15
        array[8, 12] = 35

            eps = 1e-8
            array = array / (array.sum(0).reshape(1, -1) + eps)
        x_tick_labels = class_names + ["FN"] if labels else None
        y_tick_labels = class_names + ["FP"] if labels else None

        if x_tick_labels is None:
            tick_interval = 2
        else:
            tick_interval = 1
        ax.set_xticks(np.arange(0, num_classes, tick_interval), labels=x_tick_labels)
        ax.set_yticks(np.arange(0, num_classes, tick_interval), labels=y_tick_labels)

        plt.setp(ax.get_xticklabels(), rotation=90, ha="right", rotation_mode="default")

        labelsize = 10 if self.num_classes < 50 else 8
        ax.tick_params(axis="both", which="both", labelsize=labelsize)

        if (num_classes) < 30:
            for i in range(array.shape[0]):
                for j in range(array.shape[1]):
                    ax.text(
                        j,
                        i,
                        f"{array[i, j]:.2f}" if normalize else f"{array[i, j]:.0f}",
                        ha="center",
                        va="center",
                        color="white",
                    )
        fig.savefig(save_path, dpi=250, facecolor=fig.get_facecolor(), transparent=True)