   public void MeleeAttack()
   {
       _lastShot = Time.fixedTime;

       var ray = _viewCamera.ViewportPointToRay(new Vector3(0.5f, 0.5f, 0));
       RaycastHit hit;

       if (Physics.Raycast(ray, out hit) && Vector3.Distance(transform.position, hit.point) < .5f)
       {
           if (hit.collider.tag == "Enemy")
           {
               var hitContext = new HitContext
               {
                   Damage = Random.Range(0, 2),
                   Direction = transform.forward,
                   Force = 1,
                   IsMelee = true                    
               };
               hit.collider.GetComponent<HealthBehavior>().TakeDamage(hitContext);
           }
       }
   }