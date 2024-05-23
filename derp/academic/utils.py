def generate_custom_id(model, prefix='PREFIX'):
   last_record=model.objects.order_by('-pk').first()
   if last_record:
      last_id=last_record.id
      new_id=last_id+1
   else:
      new_id=1
   return f'{prefix}-{new_id}'