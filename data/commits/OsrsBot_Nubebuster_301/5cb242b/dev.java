import lombok.NonNull;
 * <p>
public class RSObject extends MethodProvider implements Clickable07, Positionable, CacheProvider<ObjectDefinition> {
	 *
	 * @param ctx   The context in which the object exists (the singleton RuneLite)
	 * @param obj   The TileObject which this RSObject is associated with
	 * @param type  The type of game object corresponding to the enumerated {@link Type types}
	 * @param plane The plane that this object exists on
	 * found.

			return (Model) r;

	/**
	 * @param action the object action
	 * @return <code>true</code> if the action is prevent, <code>false</code> if the object does not contain the
	 * desired action
	 */
	public boolean hasAction(@NonNull final String action) {
		for (final String a : getDef().getActions()) {
			if (action.equalsIgnoreCase(a)) return true;
		}
		return false;
	}

	 * @return <code>true</code> if clicked, <code>false</code> if object does not contain the
	 * desired action
	 * @return <code>true</code> if clicked, <code>false</code> if object does not contain the
	 * desired action
	 *

	 *
		if (o != null) {
			if (!o.isOnScreen()) {
	 *
	 * @return <code>true</code> if the object is capable of being interacted with otherwise <code>false</code>
	 *
		 *
		 * @param types the type(s) to combine
		 * @return the mask value of the combined types
					sum += type.getBitValue();